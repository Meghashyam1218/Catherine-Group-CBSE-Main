<script>
    import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
	import { onMount } from 'svelte';
// ..

    import "../app.css";
    onMount(() => {
      AOS.init();
    })
  </script>
  
  <slot />