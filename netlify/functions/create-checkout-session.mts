import type { Config, Context } from "@netlify/functions";

type OrderLine = {
  title: string;
  quantity: number;
  amount: number;
  metadata?: {
    options?: string[];
    supplements?: string[];
  };
};

type CheckoutPayload = {
  currency?: string;
  locale?: string;
  orderLines?: OrderLine[];
};

const parseJson = async (req: Request) => {
  try {
    return await req.json();
  } catch {
    return null;
  }
};

const buildCorsHeaders = (req: Request) => {
  const origin = req.headers.get("origin") || "*";

  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization"
  };
};

const getBaseUrl = (req: Request) => {
  const origin = req.headers.get("origin");
  if (origin) {
    return origin;
  }

  const referer = req.headers.get("referer");
  if (referer) {
    try {
      return new URL(referer).origin;
    } catch {
      // ignore malformed referer
    }
  }

  return new URL(req.url).origin;
};

const normalizeOrderLines = (lines: OrderLine[] = []) =>
  lines
    .map((line) => ({
      title: typeof line.title === "string" ? line.title.trim() : "",
      quantity: Number(line.quantity),
      amount: Number(line.amount),
      metadata: line.metadata || {}
    }))
    .filter((line) => line.title && Number.isFinite(line.quantity) && Number.isFinite(line.amount))
    .filter((line) => line.quantity > 0 && line.amount > 0);

const addMetadataFields = (params: URLSearchParams, prefix: string, values?: string[]) => {
  if (!values || values.length === 0) {
    return;
  }

  params.set(prefix, values.join(", "));
};

const buildCheckoutParams = (payload: CheckoutPayload, baseUrl: string) => {
  const params = new URLSearchParams();
  const currency = payload.currency || "eur";
  const locale = payload.locale || "fr";
  const orderLines = normalizeOrderLines(payload.orderLines || []);

  params.set("mode", "payment");
  params.set("success_url", `${baseUrl}/?checkout=success&session_id={CHECKOUT_SESSION_ID}`);
  params.set("cancel_url", `${baseUrl}/?checkout=cancel`);
  params.set("locale", locale);

  orderLines.forEach((line, index) => {
    const linePrefix = `line_items[${index}]`;
    params.set(`${linePrefix}[quantity]`, String(line.quantity));
    params.set(`${linePrefix}[price_data][currency]`, currency);
    params.set(`${linePrefix}[price_data][unit_amount]`, String(line.amount));
    params.set(`${linePrefix}[price_data][product_data][name]`, line.title);

    addMetadataFields(
      params,
      `${linePrefix}[price_data][product_data][metadata][options]`,
      line.metadata?.options
    );
    addMetadataFields(
      params,
      `${linePrefix}[price_data][product_data][metadata][supplements]`,
      line.metadata?.supplements
    );
  });

  return { params, orderLinesCount: orderLines.length };
};

export default async (req: Request, context: Context) => {
  const corsHeaders = buildCorsHeaders(req);

  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: corsHeaders
    });
  }

  if (req.method !== "POST") {
    return new Response("Method Not Allowed", {
      status: 405,
      headers: {
        ...corsHeaders,
        Allow: "POST, OPTIONS"
      }
    });
  }

  const stripeSecretKey = Netlify.env.STRIPE_SECRET_KEY;
  if (!stripeSecretKey) {
    return new Response("Stripe secret key not configured.", {
      status: 500,
      headers: corsHeaders
    });
  }

  const payload = (await parseJson(req)) as CheckoutPayload | null;
  if (!payload) {
    return new Response("Invalid JSON payload.", {
      status: 400,
      headers: corsHeaders
    });
  }

  const { params, orderLinesCount } = buildCheckoutParams(payload, getBaseUrl(req));
  if (orderLinesCount === 0) {
    return new Response("No order lines provided.", {
      status: 400,
      headers: corsHeaders
    });
  }

  const stripeResponse = await fetch("https://api.stripe.com/v1/checkout/sessions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${stripeSecretKey}`,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: params
  });

  const stripeData = await stripeResponse.json().catch(() => null);
  if (!stripeResponse.ok) {
    const message = stripeData?.error?.message || "Stripe error.";
    return new Response(JSON.stringify({ error: message }), {
      status: stripeResponse.status,
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json"
      }
    });
  }

  return new Response(JSON.stringify({ sessionId: stripeData.id }), {
    status: 200,
    headers: {
      ...corsHeaders,
      "Content-Type": "application/json"
    }
  });
};

export const config: Config = {
  path: "/api/stripe/create-checkout-session"
};
