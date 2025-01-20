<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { products } from '../data/products';
  
  const dispatch = createEventDispatcher<{
    change: string;
  }>();
  
  // Get unique categories from products
  const categories = [...new Set(products.map(p => p.metadata.category))];
  
  function handleChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    dispatch('change', select.value);
  }
</script>

<div class="mb-6">
  <select
    class="w-48 px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
    on:change={handleChange}
  >
    <option value="">All Categories</option>
    {#each categories as category}
      <option value={category}>{category}</option>
    {/each}
  </select>
</div>