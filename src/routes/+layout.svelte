<script>
	import AOS from 'aos';
	import { gsap } from 'gsap/dist/gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import 'aos/dist/aos.css'; // You can also use <link> for styles
	import { onMount } from 'svelte';
	// ..
	import '../app.css';
  
	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		gsap.to('.fake-border', {
			scrollTrigger: {
				trigger: '.logo',
				toggleActions: 'restart none none reverse',
				start: '30% top'
				// markers:true
			},
			duration: 0.5,
			border: 0
		});
		gsap.to('.navmain', {
			scrollTrigger: {
				trigger: '#dontknow',
				toggleActions: 'restart none none reverse',
				start: 'center top'
				// markers:true
			},
			duration: 0.3,
			translateY: '0px'
		});
    gsap.to('.navmain', {
			scrollTrigger: {
				trigger: '.logo',
				toggleActions: 'restart none none reverse',
				start: '30% top'
				// markers:true
			},
			duration: 0.3,
			translateY: '0px'
		});

		AOS.init();
	});
</script>

<slot />
