<script>
	import gsap from 'gsap/dist/gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';

	console.log('in component');

	let imgs = 26;
	let y = imgs / 6;
	y = parseInt(y);
	console.log(y);
	
	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		gsap.from('.img-home', {
			scrollTrigger: {
				trigger: '.gallery-head',
				// toggleActions: 'restart none none reset',
				toggleActions: 'play none none none',
				start: '30% 70%'
			},
			opacity: 0,
			scale: 0,
			ease: 'cric.out',
			stagger: 0.3
		});
	});
</script>

<section class="overflow-hidden text-gray-700">
	

	{#each Array(y) as _, i}

	<div class="container px-5 py-2 mx-auto lg:pt-4 lg:px-32">
		<div class="flex flex-col md:flex-row md:flex-wrap -m-1 md:-m-2">
			<div class="flex flex-wrap md:w-1/2">
			  <div class="w-1/2 p-1 md:p-2 hover:brightness-[.7] cursor-pointer transition-all ease-linear">
				<img alt="gallery" class="block img-home object-cover object-center w-full h-full rounded-lg"
				  src="./gallery/img ({0+(i*6)}).jpeg">
			  </div>
			  <div class="w-1/2 p-1 md:p-2 hover:brightness-[.7] cursor-pointer transition-all ease-linear">
				<img alt="gallery" class="block img-home object-cover object-center w-full h-full rounded-lg"
				  src="./gallery/img ({1+i*6}).jpeg">
			  </div>
			  <div class="w-full p-1 md:p-2 hover:brightness-[.7] cursor-pointer transition-all ease-linear">
				<img alt="gallery" class="block img-home object-cover object-center w-full h-full rounded-lg"
				  src="./gallery/img ({2+(i*6)}).jpeg">
			  </div>
			</div>
			<div class="flex flex-wrap md:w-1/2">
			  <div class="w-full p-1 md:p-2 hover:brightness-[.7] cursor-pointer transition-all ease-linear">
				<img alt="gallery" class="block img-home object-cover object-center w-full h-full rounded-lg"
				  src="./gallery/img ({3+(i*6)}).jpeg">
			  </div>
			  <div class="w-1/2 p-1 md:p-2 hover:brightness-[.7] cursor-pointer transition-all ease-linear">
				<img alt="gallery" class="block img-home object-cover object-center w-full h-full rounded-lg"
				  src="./gallery/img ({4+(i*6)}).jpeg">
			  </div>
			  <div class="w-1/2 p-1 md:p-2 hover:brightness-[.7] cursor-pointer transition-all ease-linear">
				<img alt="gallery" class="block img-home object-cover object-center w-full h-full rounded-lg"
				  src="./gallery/img ({5+(i*6)}).jpeg">
			  </div>
			</div>
		  </div>
	</div>
	{/each}
	
</section>
