<script lang="ts">
  import { Link } from "svelte-routing";
  import type { Product } from '../types/product';
  import { cart } from '../stores/cartStore';
  import LoadingSpinner from './LoadingSpinner.svelte';
  import ProductTitle from './ProductTitle.svelte';
  import ProductPrice from './ProductPrice.svelte';
  import ProductImage from './ProductImage.svelte';
  import ProductDeliveryFee from './ProductDeliveryFee.svelte';
  import { activeProduct } from '../stores/productStore';
  
  export let product: Product;
  
  let isLoading = false;
  let isAdded = false;
  
  $: isActive = $activeProduct === product.id;
  
  function handleImageToggle() {
    if (isActive) {
      activeProduct.set(null);
    } else {
      activeProduct.set(product.id);
    }
  }
  
  async function handleAddToCart(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    
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

<Link to="/product/{product.header}" class="block bg-white shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
  <ProductImage 
    src={product.image} 
    alt={product.title}
    description={product.description}
    isActive={isActive}
    on:toggle={handleImageToggle}
  />
  <button 
    class="w-full px-4 py-4 font-semibold disabled:cursor-not-allowed transition-colors duration-200 {isAdded ? 'bg-green-500 hover:bg-green-600' : 'bg-black hover:bg-gray-900'} text-white disabled:bg-gray-400"
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
  <div class="p-4">
    <ProductTitle title={product.title} />
    <ProductPrice price={product.price} reducedPrice={product.reducedPrice} />
    <ProductDeliveryFee deliveryFee={product.deliveryFee} />
  </div>
</Link>