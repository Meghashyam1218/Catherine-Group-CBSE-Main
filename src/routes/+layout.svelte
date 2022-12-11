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
		});

		var hover1 = gsap.to('#svg1 ', {
			duration: 0.5,ease:"cric.out",
			scale: 1
		});
		var hover2 = gsap.to('#svg2 ', {
			duration: 0.5,ease:"cric.out",
			scale: 1
		});
		var hover3 = gsap.to('#svg3 ', {
			duration: 0.5,ease:"cric.out",
			scale: 1
		});

		// gsap.from('.highs', {			

		// 	scrollTrigger: {
		// 		trigger: '.highlights',
		// 		toggleActions: 'restart none none reverse',
		// 		start: 'top 80%'
		// 		// markers:true
		// 	},
		// 	opacity: 0,
		// 	ease:"circ.out",
		// 	stagger: 0.3
		// });

		let highlight1 = document.getElementById('high1');
		let highlight2 = document.getElementById('high2');
		let highlight3 = document.getElementById('high3');

		highlight1.addEventListener('mouseenter', () => {
			hover1.restart(), console.log('enter');
		});
		highlight2.addEventListener('mouseenter', () => {
			hover2.restart(), console.log('enter');
		});
		highlight3.addEventListener('mouseenter', () => {
			hover3.restart(), console.log('enter');
		});
		gsap.from('.card', {
			scrollTrigger: {
				trigger: '.events-container',
				toggleActions: 'restart none none reverse',
				start: '30% center'
				// markers:true
			},
			opacity: 0,
			ease:"cric.out",
			stagger: 0.3
		});
	});
</script>

<slot />
