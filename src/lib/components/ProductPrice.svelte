<script lang="ts">
  export let price: number;
  export let reducedPrice: number | undefined = undefined;
</script>

<div class="flex items-center gap-2">
  {#if reducedPrice !== undefined}
    <span class="text-lg font-bold text-red-600">${reducedPrice}</span>
    <span class="text-gray-500 line-through">${price}</span>
  {:else}
    <span class="text-lg font-bold text-gray-900">${price}</span>
  {/if}
</div>