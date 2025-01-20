<script lang="ts">
  import CartIcon from './CartIcon.svelte';
  import { cart } from '../stores/cartStore';
  
  export let onClick: () => void;
  
  $: itemCount = $cart.reduce((sum, item) => sum + item.quantity, 0);
</script>

<button
  class="fixed bottom-6 right-6 z-50 bg-black text-white p-6 rounded-full shadow-lg hover:bg-gray-900 transition-colors duration-200"
  on:click={onClick}
>
  <div class="relative">
    <CartIcon size="2.25em" />
    {#if itemCount > 0}
      <span 
        class="absolute -top-6 -left-6 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium"
      >
        {itemCount}
      </span>
    {/if}
  </div>
</button>