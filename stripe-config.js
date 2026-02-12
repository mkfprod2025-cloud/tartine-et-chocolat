window.STRIPE_CONFIG = {
  // Clé publique Stripe (mode test)
  publishableKey: 'pk_test_51SzwI8BlEafWibXy9c428knIP3WL59qZYFdIb0Pe7kmFyO4r3oKjnD8JithDoq96DG2K1IAZz3H9V08i1wDMD6wt00yzgEL4Fj',

  // Endpoint backend qui crée la session Stripe Checkout.
  // Exemple Netlify Functions: '/api/stripe/create-checkout-session'
  checkoutEndpoint: '/api/stripe/create-checkout-session'
};
