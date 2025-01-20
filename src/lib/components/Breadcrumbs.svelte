<script lang="ts">
  import { Link } from "svelte-routing";
  
  export let items: Array<{
    label: string;
    href?: string;
  }>;
</script>

<nav class="flex" aria-label="Breadcrumb">
  <ol class="flex items-center space-x-2">
    {#each items as item, index}
      <li class="flex items-center">
        {#if index > 0}
          <svg class="h-5 w-5 text-gray-400 mx-2" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
        {/if}
        {#if item.href && index !== items.length - 1}
          <Link 
            to={item.href}
            class="text-sm font-medium text-gray-500 hover:text-gray-700"
          >
            {item.label}
          </Link>
        {:else}
          <span class="text-sm font-medium text-gray-900">
            {item.label}
          </span>
        {/if}
      </li>
    {/each}
  </ol>
</nav>