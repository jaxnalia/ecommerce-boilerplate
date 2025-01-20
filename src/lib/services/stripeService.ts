import { loadStripe } from '@stripe/stripe-js';
import { STRIPE_PUBLISHABLE_KEY } from '../config/stripe';
import type { CartItem } from '../types/product';

let stripePromise: Promise<any>;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);
  }
  return stripePromise;
};

export const createCheckoutSession = async (items: CartItem[]) => {
  const stripe = await getStripe();

  const lineItems = items.map(item => ({
    price: item.stripe_price_id,
    quantity: item.quantity
  }));

  const { error } = await stripe.redirectToCheckout({
    mode: 'payment',
    lineItems,
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}/cart`,
  });

  if (error) {
    console.error('Stripe checkout error:', error);
    throw new Error(error.message);
  }
};