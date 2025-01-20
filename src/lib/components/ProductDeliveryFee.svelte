<script lang="ts">
  export let deliveryFee: string;
</script>

<div class="text-sm text-gray-600">
  {#if parseFloat(deliveryFee) === 0}
    <span class="text-gray-600">Free Shipping</span>
  {:else}
    <span>Shipping ${deliveryFee}</span>
  {/if}
</div>