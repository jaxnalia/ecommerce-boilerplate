<script lang="ts">
  import { cart } from '../lib/stores/cartStore';
  import ProductDeliveryFee from '../lib/components/ProductDeliveryFee.svelte';
  import BinIcon from '../lib/components/icons/BinIcon.svelte';
  import CheckoutButton from '../lib/components/CheckoutButton.svelte';
  
  $: total = $cart.reduce((sum, item) => {
    const price = item.reducedPrice ?? item.price;
    const itemTotal = price * item.quantity;
    const deliveryFee = parseFloat(item.deliveryFee);
    return sum + itemTotal + deliveryFee;
  }, 0);
</script>

<div class="max-w-7xl mx-auto px-4 py-8">
  <h1 class="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
  
  {#if $cart.length === 0}
    <p class="text-lg text-gray-600">Your cart is empty</p>
  {:else}
    <div class="bg-white shadow-lg rounded-lg overflow-hidden">
      <ul class="divide-y divide-gray-200">
        {#each $cart as item}
          <li class="p-6 flex items-start">
            <img 
              src={item.image} 
              alt={item.title} 
              class="w-32 h-32 object-cover rounded-md"
            />
            <div class="ml-6 flex-1">
              <div class="flex justify-between">
                <h3 class="text-lg font-medium text-black">{item.title}</h3>
                <button 
                  class="p-1 rounded-full hover:bg-red-50 transition-colors"
                  on:click={() => cart.removeItem(item.id)}
                  aria-label="Remove item">
                  <BinIcon size="1.5em" />
                </button>
              </div>
              <p class="mt-1 text-sm text-gray-500">{item.description}</p>
              <div class="mt-2 flex items-center">
                <button 
                  class="text-black hover:text-gray-700 px-2 py-1"
                  on:click={() => cart.updateQuantity(item.id, item.quantity - 1)}>
                  -
                </button>
                <span class="mx-2 text-black">{item.quantity}</span>
                <button 
                  class="text-black hover:text-gray-700 px-2 py-1"
                  on:click={() => cart.updateQuantity(item.id, item.quantity + 1)}>
                  +
                </button>
              </div>
              <div class="mt-2">
                {#if item.reducedPrice}
                  <p class="text-lg font-medium text-red-600">
                    ${(item.reducedPrice * item.quantity).toFixed(2)}
                  </p>
                  <p class="text-sm text-gray-500 line-through">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                {:else}
                  <p class="text-lg font-medium text-black">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                {/if}
                <ProductDeliveryFee deliveryFee={item.deliveryFee} />
              </div>
            </div>
          </li>
        {/each}
      </ul>
      
      <div class="border-t border-gray-200 p-6">
        <div class="flex justify-between text-xl font-semibold text-black mb-6">
          <p>Total (including delivery)</p>
          <p>${total.toFixed(2)}</p>
        </div>
        <div class="max-w-md mx-auto">
          <CheckoutButton items={$cart} disabled={$cart.length === 0} />
        </div>
      </div>
    </div>
  {/if}
</div>