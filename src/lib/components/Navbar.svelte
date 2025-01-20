<script lang="ts">
  import { Link, useLocation } from "svelte-routing";
  import FloatingCartButton from './FloatingCartButton.svelte';
  import CartDrawer from './CartDrawer.svelte';
  import { cart } from '../stores/cartStore';
  import CartIcon from './CartIcon.svelte';
  
  let isMenuOpen = false;
  let isCartOpen = false;
  
  const location = useLocation();
  $: isCartRoute = $location.pathname === '/cart';
  $: itemCount = $cart.reduce((sum, item) => sum + item.quantity, 0);
</script>

<nav class="bg-white shadow-lg">
  <div class="max-w-7xl mx-auto px-4">
    <div class="flex justify-between h-16">
      <div class="flex items-center">
        <Link to="/" class="text-xl font-bold text-gray-800">ShopSmart</Link>
      </div>
      
      <div class="hidden md:flex items-center space-x-6">
        <Link to="/" class="text-gray-600 hover:text-gray-900">Home</Link>
        <Link 
          to="/cart" 
          class="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
        >
          <CartIcon size="1.25em" color="text-gray-600" />
          <span>Cart</span>
          {#if itemCount > 0}
            <span class="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {itemCount}
            </span>
          {/if}
        </Link>
      </div>

      <button 
        class="md:hidden flex items-center"
        on:click={() => isMenuOpen = !isMenuOpen}>
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>
    </div>
  </div>

  {#if isMenuOpen}
    <div class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <Link to="/" class="block px-3 py-2 text-gray-600 hover:text-gray-900">Home</Link>
        <Link 
          to="/cart" 
          class="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-gray-900"
        >
          <CartIcon size="1.25em" color="text-gray-600" />
          <span>Cart</span>
          {#if itemCount > 0}
            <span class="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {itemCount}
            </span>
          {/if}
        </Link>
      </div>
    </div>
  {/if}
</nav>

{#if !isCartRoute}
  <FloatingCartButton onClick={() => isCartOpen = true} />
{/if}
<CartDrawer bind:isOpen={isCartOpen} />