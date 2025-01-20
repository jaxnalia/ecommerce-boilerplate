import './app.css'
import './styles/scrollbar.css'
import App from './App.svelte'
import { Router } from 'svelte-routing'

const app = new App({
  target: document.getElementById('app')!,
  props: {
    url: window.location.pathname
  }
})

export default app