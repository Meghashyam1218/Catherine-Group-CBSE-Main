<script>
	import gsap from "gsap/dist/gsap";
	import ScrollTrigger from "gsap/dist/ScrollTrigger";

	import { onMount } from "svelte";


    onMount(()=>{
        gsap.registerPlugin(ScrollTrigger);
        gsap.from('.img-home',{
            scrollTrigger:{
                trigger:'.gallery-head',
                // toggleActions: 'restart none none reset',
                toggleActions: 'play none none none',
				start: '30% 70%'
            },
            opacity:0,
            scale:0,
            ease:"cric.out",
			stagger: 0.3
        })
    })
</script>
<section class="overflow-hidden text-gray-700">
    <div
		class="gallery-head  w-[90vw] mx-auto flex flex-col md:flex-row justify-between items-center p-4"	>
		<h1
			class="md:text-6xl text-4xl 2xs:text-4xl font-black lg::basis-3/4 text-gray-800 md:m-4 md:ml-6"
		>
			Gallery
		</h1>
		<div class="lg:flex hidden lg:basis-1/4 scale-[0.7] md:scale-[1] justify-end md:mr-20">
			<div class="arrow-left pointer-events-none  opacity-0 rotate-0 md:ml-6">
				<svg
					width="50pt"
					height="50pt"
					viewBox="0 0 100.000000 100.000000"
					preserveAspectRatio="xMidYMid meet"
				>
					<g
						transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)"
						fill="rgb(66, 66, 66)"
						stroke="none"
					>
						<path
							d="M386 944 c-225 -54 -376 -286 -338 -517 62 -367 512 -513 773 -252
                    329 330 18 879 -435 769z m219 -39 c312 -81 418 -473 191 -701 -241 -240 -651
                    -107 -709 230 -50 295 226 546 518 471z"
						/>
						<path
							d="M325 590 l-90 -90 92 -92 c73 -73 95 -90 105 -80 10 10 -2 27 -57 82
                    l-69 70 224 2 c192 3 225 5 225 18 0 13 -33 15 -225 18 l-224 2 68 69 c59 60
                    76 91 48 91 -4 0 -48 -41 -97 -90z"
						/>
					</g>
				</svg>
			</div>
			<div class="arrow-right pointer-events-none opacity-0 rotate-180 md:ml-6">
				<svg
					width="50pt"
					height="50pt"
					viewBox="0 0 100.000000 100.000000"
					preserveAspectRatio="xMidYMid meet"
				>
					<g
						transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)"
						fill="rgb(66, 66, 66)"
						stroke="none"
					>
						<path
							d="M386 944 c-225 -54 -376 -286 -338 -517 62 -367 512 -513 773 -252
                    329 330 18 879 -435 769z m219 -39 c312 -81 418 -473 191 -701 -241 -240 -651
                    -107 -709 230 -50 295 226 546 518 471z"
						/>
						<path
							d="M325 590 l-90 -90 92 -92 c73 -73 95 -90 105 -80 10 10 -2 27 -57 82
                    l-69 70 224 2 c192 3 225 5 225 18 0 13 -33 15 -225 18 l-224 2 68 69 c59 60
                    76 91 48 91 -4 0 -48 -41 -97 -90z"
						/>
					</g>
				</svg>
			</div>
		</div>
	</div>
  <div class="container px-5 py-2 mx-auto lg:pt-4 lg:px-32">
    <div class="flex flex-col md:flex-row md:flex-wrap -m-1 md:-m-2">
      <div class="flex flex-wrap md:w-1/2">
        <div class="w-1/2 p-1 md:p-2 hover:brightness-[.7] cursor-pointer transition-all ease-linear">
          <img alt="gallery" class="block img-home object-cover object-center w-full h-full rounded-lg"
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp">
        </div>
        <div class="w-1/2 p-1 md:p-2 hover:brightness-[.7] cursor-pointer transition-all ease-linear">
          <img alt="gallery" class="block img-home object-cover object-center w-full h-full rounded-lg"
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp">
        </div>
        <div class="w-full p-1 md:p-2 hover:brightness-[.7] cursor-pointer transition-all ease-linear">
          <img alt="gallery" class="block img-home object-cover object-center w-full h-full rounded-lg"
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp">
        </div>
      </div>
      <div class="flex flex-wrap md:w-1/2">
        <div class="w-full p-1 md:p-2 hover:brightness-[.7] cursor-pointer transition-all ease-linear">
          <img alt="gallery" class="block img-home object-cover object-center w-full h-full rounded-lg"
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp">
        </div>
        <div class="w-1/2 p-1 md:p-2 hover:brightness-[.7] cursor-pointer transition-all ease-linear">
          <img alt="gallery" class="block img-home object-cover object-center w-full h-full rounded-lg"
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp">
        </div>
        <div class="w-1/2 p-1 md:p-2 hover:brightness-[.7] cursor-pointer transition-all ease-linear">
          <img alt="gallery" class="block img-home object-cover object-center w-full h-full rounded-lg"
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp">
        </div>
      </div>
    </div>
    <a href="#/" class="text-right float-right text-xl font-semibold mt-4 p-4s hover:underline">More gallery...</a>
  </div>
  
</section>