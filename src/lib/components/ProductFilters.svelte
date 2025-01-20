<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { products } from '../data/products';
  
  const dispatch = createEventDispatcher<{
    categoryChange: string;
    priceSort: string;
  }>();
  
  const categories = [...new Set(products.map(p => p.metadata.category))];
  
  function handleCategoryChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    dispatch('categoryChange', select.value);
  }
  
  function handlePriceSort(event: Event) {
    const select = event.target as HTMLSelectElement;
    dispatch('priceSort', select.value);
  }
</script>

<div class="mb-6 flex gap-4">
  <select
    class="w-48 px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
    on:change={handleCategoryChange}
  >
    <option value="">All Categories</option>
    {#each categories as category}
      <option value={category}>{category}</option>
    {/each}
  </select>

  <select
    class="w-48 px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
    on:change={handlePriceSort}
  >
    <option value="">Sort by Price</option>
    <option value="low">Low to High</option>
    <option value="high">High to Low</option>
  </select>
</div>