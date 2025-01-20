import { writable } from 'svelte/store';

export const activeProduct = writable<number | null>(null);