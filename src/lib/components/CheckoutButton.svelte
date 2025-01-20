<script lang="ts">
  import { createCheckoutSession } from '../services/stripeService';
  import type { CartItem } from '../types/product';
  import LoadingSpinner from './LoadingSpinner.svelte';

  export let items: CartItem[];
  export let disabled = false;

  let isLoading = false;

  async function handleCheckout() {
    if (disabled || items.length === 0) return;

    try {
      isLoading = true;
      await createCheckoutSession(items);
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Failed to initiate checkout. Please try again.');
    } finally {
      isLoading = false;
    }
  }
</script>

<button
  class="w-full bg-black text-white px-4 py-2 hover:bg-gray-900 disabled:bg-gray-400 disabled:cursor-not-allowed"
  on:click={handleCheckout}
  disabled={disabled || isLoading}>
  {#if isLoading}
    <LoadingSpinner />
    Processing...
  {:else}
    Checkout
  {/if}
</button>