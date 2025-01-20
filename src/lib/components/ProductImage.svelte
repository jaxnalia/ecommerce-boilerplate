<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  
  export let src: string;
  export let alt: string;
  export let description: string;
  export let isActive: boolean = false;
  
  const dispatch = createEventDispatcher<{
    toggle: void;
  }>();
</script>

<div 
  class="aspect-square w-full relative group cursor-pointer"
  on:click={() => dispatch('toggle')}
>
  <img 
    {src} 
    {alt} 
    class="absolute inset-0 w-full h-full object-cover"
  />
  <div 
    class="absolute inset-0 bg-black transition-opacity duration-200"
    class:opacity-25={isActive}
    class:group-hover:opacity-25={!isActive}
    class:opacity-0={!isActive && !false}
  />
  <div 
    class="absolute inset-0 p-6 text-white transition-opacity duration-200 flex items-center justify-center"
    class:opacity-100={isActive}
    class:group-hover:opacity-100={!isActive}
    class:opacity-0={!isActive && !false}
  >
    <p class="text-center text-sm leading-relaxed">{description}</p>
  </div>
</div>