<script lang="ts">
  import { cart } from '../stores/cartStore';
  import CheckoutButton from './CheckoutButton.svelte';
  import BinIcon from './icons/BinIcon.svelte';
  import ProductDeliveryFee from './ProductDeliveryFee.svelte';
  import type { CartItem } from '../types/product';
  
  export let isOpen = false;
  
  $: total = $cart.reduce((sum, item) => {
    const price = item.reducedPrice ?? item.price;
    const itemTotal = price * item.quantity;
    const deliveryFee = parseFloat(item.deliveryFee);
    return sum + itemTotal + deliveryFee;
  }, 0);
</script>

<div class="fixed inset-0 overflow-hidden z-50" class:hidden={!isOpen}>
  <div class="absolute inset-0 overflow-hidden">
    <div class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" 
         on:click={() => isOpen = false}></div>
    
    <div class="fixed inset-y-0 right-0 pl-10 max-w-full flex">
      <div class="w-screen max-w-md">
        <div class="h-full flex flex-col bg-white shadow-xl">
          <div class="flex-1 py-6 overflow-y-auto px-4">
            <div class="flex items-start justify-between">
              <h2 class="text-lg font-medium text-black">Shopping Cart</h2>
              <button class="text-black hover:text-gray-500" on:click={() => isOpen = false}>
                <span class="sr-only">Close panel</span>
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div class="mt-8">
              {#if $cart.length === 0}
                <p class="text-black">Your cart is empty</p>
              {:else}
                <div class="flow-root">
                  <ul class="-my-6 divide-y divide-gray-200">
                    {#each $cart as item}
                      <li class="py-6 flex">
                        <img src={item.image} alt={item.title} 
                             class="w-24 h-24 object-cover" />
                        <div class="ml-4 flex-1">
                          <div class="flex justify-between">
                            <h3 class="text-sm font-medium text-black">{item.title}</h3>
                            <button 
                              class="p-1 rounded-full hover:bg-red-50 transition-colors"
                              on:click={() => cart.removeItem(item.id)}
                              aria-label="Remove item">
                              <BinIcon />
                            </button>
                          </div>
                          <div class="mt-1 flex items-center">
                            <button class="text-black hover:text-gray-700"
                                    on:click={() => cart.updateQuantity(item.id, item.quantity - 1)}>
                              -
                            </button>
                            <span class="mx-2 text-black">{item.quantity}</span>
                            <button class="text-black hover:text-gray-700"
                                    on:click={() => cart.updateQuantity(item.id, item.quantity + 1)}>
                              +
                            </button>
                          </div>
                          <div class="mt-1">
                            {#if item.reducedPrice}
                              <p class="text-sm font-medium text-red-600">
                                ${(item.reducedPrice * item.quantity).toFixed(2)}
                              </p>
                              <p class="text-sm text-gray-500 line-through">
                                ${(item.price * item.quantity).toFixed(2)}
                              </p>
                            {:else}
                              <p class="text-sm font-medium text-black">
                                ${(item.price * item.quantity).toFixed(2)}
                              </p>
                            {/if}
                            <ProductDeliveryFee deliveryFee={item.deliveryFee} />
                          </div>
                        </div>
                      </li>
                    {/each}
                  </ul>
                </div>
              {/if}
            </div>
          </div>

          <div class="border-t border-gray-200 py-6 px-4">
            <div class="flex justify-between text-base font-semibold text-black">
              <p>Total + Shipping</p>
              <p>${total.toFixed(2)}</p>
            </div>
            <div class="mt-6">
              <CheckoutButton 
                items={$cart} 
                disabled={$cart.length === 0} 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>