<script>
	import AOS from 'aos';
	import { Circ, gsap } from 'gsap/dist/gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import 'aos/dist/aos.css'; // You can also use <link> for styles
	import { onMount } from 'svelte';
	// ..
	import '../app.css';
	console.log("layout")
	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		
		
		AOS.init({
			// anchorPlacement: 'top-center',
			once:true
		});

		
	});
</script>

<slot />
