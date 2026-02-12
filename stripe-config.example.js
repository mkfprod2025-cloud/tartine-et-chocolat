window.STRIPE_CONFIG = {
  // Clé publique Stripe (test) fournie pour ce projet.
  publishableKey: 'pk_test_51SzwI8BlEafWibXy9c428knIP3WL59qZYFdIb0Pe7kmFyO4r3oKjnD8JithDoq96DG2K1IAZz3H9V08i1wDMD6wt00yzgEL4Fj',

  // URL de votre backend qui crée une Session Checkout.
  // Exemple en local: 'http://localhost:4242/create-checkout-session'
  // Exemple en prod: 'https://votre-backend.com/create-checkout-session'
  checkoutEndpoint: 'http://localhost:4242/create-checkout-session'
};
