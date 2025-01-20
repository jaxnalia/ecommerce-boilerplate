<script lang="ts">
  import { cart } from '../lib/stores/cartStore';
  import type { Product } from '../lib/types/product';
  import LoadingSpinner from '../lib/components/LoadingSpinner.svelte';
  import ProductDeliveryFee from '../lib/components/ProductDeliveryFee.svelte';
  import Breadcrumbs from '../lib/components/Breadcrumbs.svelte';
  import { products } from '../lib/data/products';
  
  export let header: string;
  
  let isLoading = false;
  let isAdded = false;
  
  $: product = products.find(p => p.header === header) as Product;
  $: breadcrumbItems = product ? [
    { label: 'Home', href: '/' },
    { label: product.metadata.category, href: `/?category=${product.metadata.category}` },
    { label: product.title }
  ] : [
    { label: 'Home', href: '/' },
    { label: 'Product not found' }
  ];
  
  async function handleAddToCart() {
    if (isLoading || product.inventory === 0) return;
    
    isLoading = true;
    await new Promise(resolve => setTimeout(resolve, 500));
    cart.addItem(product);
    
    isLoading = false;
    isAdded = true;
    
    setTimeout(() => {
      isAdded = false;
    }, 1500);
  }
</script>

<div class="max-w-7xl mx-auto px-4 py-8">
  <div class="mb-6">
    <Breadcrumbs items={breadcrumbItems} />
  </div>
  
  {#if product}
    <div class="bg-white rounded-lg shadow-lg overflow-hidden">
      <div class="md:flex">
        <div class="md:w-1/2">
          <img 
            src={product.image} 
            alt={product.title}
            class="w-full h-[400px] object-cover"
          />
        </div>
        <div class="p-8 md:w-1/2">
          <h1 class="text-3xl font-bold text-gray-900 mb-4">{product.title}</h1>
          <p class="text-gray-600 mb-6">{product.description}</p>
          
          <div class="mb-6">
            <div class="flex items-center gap-2 mb-2">
              {#if product.reducedPrice !== undefined}
                <span class="text-2xl font-bold text-red-600">${product.reducedPrice}</span>
                <span class="text-xl text-gray-500 line-through">${product.price}</span>
              {:else}
                <span class="text-2xl font-bold text-gray-900">${product.price}</span>
              {/if}
            </div>
            <ProductDeliveryFee deliveryFee={product.deliveryFee} />
          </div>
          
          <div class="mb-6">
            <h2 class="font-semibold text-gray-900 mb-2">Specifications:</h2>
            <ul class="space-y-2 text-gray-600">
              <li><span class="font-medium">Category:</span> {product.metadata.category}</li>
              {#if product.metadata.weight}
                <li><span class="font-medium">Weight:</span> {product.metadata.weight}</li>
              {/if}
              {#if product.metadata.dimensions}
                <li><span class="font-medium">Dimensions:</span> {product.metadata.dimensions}</li>
              {/if}
            </ul>
          </div>
          
          <button 
            class="w-full px-6 py-3 text-lg font-semibold disabled:cursor-not-allowed transition-colors duration-200 {isAdded ? 'bg-green-500 hover:bg-green-600' : 'bg-black hover:bg-gray-900'} text-white disabled:bg-gray-400"
            on:click={handleAddToCart}
            disabled={product.inventory === 0 || isLoading}>
            {#if product.inventory === 0}
              Out of Stock
            {:else if isLoading}
              <LoadingSpinner />
              Adding...
            {:else if isAdded}
              Added!
            {:else}
              Add to Cart
            {/if}
          </button>
        </div>
      </div>
    </div>
  {:else}
    <p class="text-xl text-gray-600">Product not found</p>
  {/if}
</div>