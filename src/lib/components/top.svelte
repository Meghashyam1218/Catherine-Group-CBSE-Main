<script>
	import { scale, fade, slide } from 'svelte/transition';

	
	// import { onMount } from 'svelte';
	var nav = true;
	function navToggle() {
		nav = !nav;
		console.log(nav);
	}
	
</script>

<section class="z-[999] h-[0px]  fixed top-0">
	<div
		in:fade
		class="w-[100vw] navmain translate-y-[-85px]  transition-all duration-500 ease-linear  bg-white h-[70px] md:h-[85px]  pt-[5px] md:pt-[10px] px-[25px] md:px-[24px] xl:px-[42px] {nav ===
		false
			? ' rounded-b-none '
			: 'rounded-b-[2rem] shadow-md'} "
	>
		<div class="nav grid">
			<div>
				{#if nav}
					<button
						aria-label="Open main menu "
						tabindex="1"
						aria-haspopup="true"
						class="bg-[#0c1637] button-menu py-[15px] px-[15px] md:px-[30px] button--white header__menu-btn-open transition-all duration-500 ease-linear "
						on:click={navToggle}
					>
						<span class="button__icon-menu">
							<svg
								class="mr-0 lg:mr-[20px] fill-white"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								role="img"
							>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M23.5 6C23.7761 6 24 5.77614 24 5.5C24 5.22386 23.7761 5 23.5 5L0.5 5C0.223858 5 0 5.22386 0 5.5C0 5.77614 0.223858 6 0.5 6L23.5 6ZM24 12.5C24 12.7761 23.7761 13 23.5 13L0.5 13C0.223858 13 0 12.7761 0 12.5C0 12.2239 0.223858 12 0.5 12L23.5 12C23.7761 12 24 12.2239 24 12.5ZM24 19.5C24 19.7761 23.7761 20 23.5 20L0.5 20C0.223858 20 0 19.7761 0 19.5C0 19.2239 0.223858 19 0.5 19L23.5 19C23.7761 19 24 19.2239 24 19.5Z"
								/>
							</svg>
						</span>
						<span class="hidden text-white lg:inline">Explore more</span>
					</button>
				{:else}
					<button
						aria-label="Open main menu "
						tabindex="1"
						aria-haspopup="true"
						class="bg-[#fff] button-menu p-[15px]"
						on:click={navToggle}
					>
						<span class="button__icon ">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="fill-[#0c1637]"
								viewBox="0 0 50 50"
								role="img"
								><path
									d="M7.719 6.281 6.28 7.72 23.563 25 6.28 42.281 7.72 43.72 25 26.437 42.281 43.72l1.438-1.438L26.437 25 43.72 7.719 42.28 6.28 25 23.563Z"
								/></svg
							>
						</span>
						<span class="hidden ml-2 lg:inline">Close</span>
					</button>
				{/if}
			</div>
			<div class="flex items-center justify-center pointer-events-none">
				<img src="./logo.png" class="h-[40px] mr-2" />
				<span class="text-2xl font-bold">Catherine CBSE</span>
			</div>
			<div
				class="header__nav anim--fade--reverse anim--fade--reverse--in lg:flex justify-end items-center hidden"
			>
				<ul class="header__nav-links flex ">
					<li class=" {nav === false ? ' hidden  ' : 'inline-block'}">
						<a
							href="/resources"
							aria-label="Educational Resources"
							tabindex="1"
							class="link menu-list after:h-[1px] text-sm xl:text-base text-[#0c1637]"
							><span>Mandatory Disclosure</span></a
						>
					</li>
					<li class="  {nav === false ? ' hidden ' : 'inline-block ml-[24px]'}">
						<a
							href="/community"
							aria-label="Community"
							tabindex="1"
							class="link menu-list after:h-[1px] text-[#0c1637]"><span>Contact Us</span></a
						>
					</li>
					<li class=" inline-block ml-[24px]">
						<a
							href="/community"
							aria-label="Community"
							tabindex="1"
							class="link flex flex-roww text-[#0c1637]"
							><span class="inline mr-2"
								><svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="w-6 h-6"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
									/>
								</svg>
							</span><a class="inline menu-list after:h-[1px]">Live Chat</a></a
						>
					</li>
				</ul>
			</div>
		</div>
	</div>
	{#if !nav}
		<div
			out:fade
			class="w-[100vw] fixed top-0 transition-all duration-500 ease-linear  bg-white h-[70px] md:h-[85px]  pt-[5px] md:pt-[10px] px-[25px] md:px-[24px] xl:px-[42px] "
		>
			<div class="nav grid">
				<div>
					<button
						aria-label="Open main menu "
						tabindex="1"
						aria-haspopup="true"
						class="bg-[#fff] button-menu p-[15px]"
						on:click={navToggle}
					>
						<span class="button__icon ">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="fill-[#0c1637]"
								viewBox="0 0 50 50"
								role="img"
								><path
									d="M7.719 6.281 6.28 7.72 23.563 25 6.28 42.281 7.72 43.72 25 26.437 42.281 43.72l1.438-1.438L26.437 25 43.72 7.719 42.28 6.28 25 23.563Z"
								/></svg
							>
						</span>
						<span class="hidden ml-2 lg:inline">Close</span>
					</button>
				</div>
				<div class="flex items-center justify-center pointer-events-none">
					<img src="./logo.png" class="h-[40px] mr-2" />
					<span class="text-2xl font-bold">Catherine CBSE</span>
				</div>
				<div
					class="header__nav anim--fade--reverse anim--fade--reverse--in lg:flex justify-end items-center hidden"
				>
					<ul class="header__nav-links flex ">
						<li class=" {nav === false ? ' hidden  ' : 'inline-block'}">
							<a
								href="/resources"
								aria-label="Educational Resources"
								tabindex="1"
								class="link menu-list after:h-[1px] text-sm xl:text-base text-[#0c1637]"
								><span>Mandatory Disclosure</span></a
							>
						</li>
						<li class="  {nav === false ? ' hidden ' : 'inline-block ml-[24px]'}">
							<a
								href="/community"
								aria-label="Community"
								tabindex="1"
								class="link menu-list after:h-[1px] text-[#0c1637]"><span>Contact Us</span></a
							>
						</li>
						<li class=" inline-block ml-[24px]">
							<a
								href="/community"
								aria-label="Community"
								tabindex="1"
								class="link flex flex-roww text-[#0c1637]"
								><span class="inline mr-2"
									><svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										class="w-6 h-6"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
										/>
									</svg>
								</span><a class="inline menu-list after:h-[1px]">Live Chat</a></a
							>
						</li>
					</ul>
				</div>
			</div>
		</div>
	{/if}
	{#if !nav}
		<div transition:slide class="absolute z-[999] top-[70px] md:top-[85px] w-[100%] ">
			<div
				class="flex md:flex-row flex-col border-b-[1px] rounded-b-[2.5rem] bg-white md:px-[20vw] border-t-[1px] "
			>
				<div
					class="md:w-[50%] pl-10 md:pl-0 pt-5 border-b-[1px] md:border-r-[1px] md:pb-10 md:pt-10"
				>
					<uL>
						<li class=" p-2 md:p-4">
							<a
								class=" menu-list text-xl md:text-2xl after:h-[3px] cursor-pointer font-semibold text-[#0c1637]"
								>About US</a
							>
						</li>
						<li class=" p-2 md:p-4">
							<a
								class=" menu-list text-xl md:text-2xl after:h-[3px] cursor-pointer font-semibold text-[#0c1637]"
								>Infrastructure</a
							>
						</li>
						<li class=" p-2 md:p-4">
							<a
								class=" menu-list text-xl md:text-2xl after:h-[3px] cursor-pointer font-semibold text-[#0c1637]"
								>Admissions</a
							>
						</li>
						<li class=" p-2 md:p-4">
							<a
								class=" menu-list text-xl md:text-2xl after:h-[3px] cursor-pointer font-semibold text-[#0c1637]"
								>Educators</a
							>
						</li>
						<li class=" p-2 md:p-4">
							<a
								class=" menu-list text-xl md:text-2xl after:h-[3px] cursor-pointer font-semibold text-[#0c1637]"
								>Curriculum</a
							>
						</li>
						<li class=" p-2 md:p-4">
							<a
								class=" menu-list text-xl md:text-2xl after:h-[3px] cursor-pointer font-semibold text-[#0c1637]"
								>Events</a
							>
						</li>
					</uL>
				</div>
				<div class="md:w-[50%] mt-5 md:pt-10 pl-10 pb-10">
					<h1 class=" text-xl  md:text-2xl text-[#0c1637] font-medium">Quick Links</h1>
					<ul class="md:py-4">
						<li class="p-3">
							<a class="menu-list cursor-pointer	text-base md:text-xl p-0 after:h-[1px] font-light"
								>Mandatory Disclosure</a
							>
						</li>
						<li class="p-3">
							<a class="menu-list cursor-pointer	text-base md:text-xl p-0 after:h-[1px] font-light"
								>Contact Us</a
							>
						</li>
						<li class="p-3">
							<a class="menu-list cursor-pointer	text-base md:text-xl p-0 after:h-[1px] font-light"
								>Catherine College</a
							>
						</li>
						<li class="p-3">
							<a class="menu-list cursor-pointer	text-base md:text-xl p-0 after:h-[1px] font-light"
								>Catherine School</a
							>
						</li>
						<li class="p-3">
							<a class="menu-list cursor-pointer	text-base md:text-xl p-0 after:h-[1px] font-light"
								>Directions to Catherine</a
							>
						</li>
					</ul>
				</div>
			</div>
		</div>
	{/if}
</section>

<section class="">
	<div class="hero-container relative overflow-hidden  ">
		<div
			class="fake-border2  border-[#f5f5f5]  backdrop-blur-xl lg:border-t-[20px] lg:border-x-[20px] md:border-t-[15px] md:border-x-[15px]  absolute top-0 lg:h-[70vh]  w-[100%] h-[60vh] md:h-[60vh]"
		>
			<div
				class=" navfake mt-[60px] md:mt-[130px] lg:mt-[170px] mb-10 flex flex-col justify-center">
				<div id="dontknow" class="nav absolute top-[20px] w-[100%] px-5 grid items-center">
					<div>
						<button
							aria-label="Open main menu "
							tabindex="1"
							aria-haspopup="true"
							class="bg-[#fff] max-md:mx-auto button-menu py-[15px] px-[15px] md:px-[30px] button--white header__menu-btn-open transition-all duration-500 ease-linear "
							on:click={navToggle}
						>
							<span class="button__icon-menu">
								<svg
									class="mr-0 lg:mr-[20px] fill-[#0c1637]"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
									role="img"
								>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M23.5 6C23.7761 6 24 5.77614 24 5.5C24 5.22386 23.7761 5 23.5 5L0.5 5C0.223858 5 0 5.22386 0 5.5C0 5.77614 0.223858 6 0.5 6L23.5 6ZM24 12.5C24 12.7761 23.7761 13 23.5 13L0.5 13C0.223858 13 0 12.7761 0 12.5C0 12.2239 0.223858 12 0.5 12L23.5 12C23.7761 12 24 12.2239 24 12.5ZM24 19.5C24 19.7761 23.7761 20 23.5 20L0.5 20C0.223858 20 0 19.7761 0 19.5C0 19.2239 0.223858 19 0.5 19L23.5 19C23.7761 19 24 19.2239 24 19.5Z"
									/>
								</svg>
							</span>
							<span class="hidden text-[#0c1637] font-medium lg:inline">Explore more</span>
						</button>
					</div>

					<div class="flex items-center justify-center pointer-events-none">
						<img src="./logo.png" class="h-[50px] mr-2" />
						<span class="logo text-2xl text-white font-bold">Catherine CBSE</span>
					</div>
					<div
						class="header__nav anim--fade--reverse anim--fade--reverse--in lg:flex justify-end items-center hidden"
					>
						<ul class="header__nav-links flex ">
							<li class=" {nav === false ? ' hidden  ' : 'inline-block'}">
								<a
									href="/resources"
									aria-label="Educational Resources"
									tabindex="1"
									class="link menu-list after:h-[1px] font-medium text-sm xl:text-base text-[#fff]"
									><span>Mandatory Disclosure</span></a
								>
							</li>
							<li class="  {nav === false ? ' hidden ' : 'inline-block ml-[24px]'}">
								<a
									href="/community"
									aria-label="Community"
									tabindex="1"
									class="link font-medium menu-list after:h-[1px] text-[#fff]"
									><span>Contact Us</span></a
								>
							</li>
							<li class=" inline-block ml-[24px]">
								<a
									href="/community"
									aria-label="Community"
									tabindex="1"
									class="link flex flex-roww text-[#fff]"
									><span class="inline mr-2"
										><svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
											class="w-6 h-6"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
											/>
										</svg>
									</span><a class=" hidden lg:menu-list after:h-[1px]">Live Chat</a></a
								>
							</li>
						</ul>
					</div>
				</div>
				
				
			</div>
            <a class="m-10"><span class=" text-white"><a class="p-2 text-white font-regular tracking-widest">Home</a>-</span><span class=""><a class="p-2 text-white tracking-widest">Component</a></span></a>
			<h1 class="2xs:ml-10 mt-5 text-6xl md:text-6xl lg:text-8xl font-bold text-white max-w-[1000px]">Component Heading</h1>
            <a class="z-[-30] md:block hidden absolute scale-y-[-1] scale-x-[-1] left-[-5px] top-[-5px]">
                <svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 36 36"
					role="img"
					class="corner w-[30px] bottom-left">
                    <path
						d="M35.93,29.89V0H29.84A29.89,29.89,0,0,1,0,29.89H0V36H36v-6.1Z"
						transform="translate(0.04 0.01)"
						fill="#f5f5f5"/>
                </svg>
                        </a
			>
			<a class="z-[-30] md:block hidden  absolute scale-y-[-1] right-[-5px] top-[-5px]"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 36 36"
					role="img"
					class="corner w-[30px] bottom-left"
					><path
						d="M35.93,29.89V0H29.84A29.89,29.89,0,0,1,0,29.89H0V36H36v-6.1Z"
						transform="translate(0.04 0.01)"
						fill="#f5f5f5"
					/></svg
				></a
			>
			<a class="z-[-30]  absolute scale-x-[-1] left-[-5px] bottom-[-5px]"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 36 36"
					role="img"
					class="corner w-[30px] bottom-left"
					><path
						d="M35.93,29.89V0H29.84A29.89,29.89,0,0,1,0,29.89H0V36H36v-6.1Z"
						transform="translate(0.04 0.01)"
						fill="#f5f5f5"
					/></svg
				></a
			>
			<a class="z-[-30]  absolute right-[-5px] bottom-[-5px]"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 36 36"
					role="img"
					class="corner w-[30px] bottom-left"
					><path
						d="M35.93,29.89V0H29.84A29.89,29.89,0,0,1,0,29.89H0V36H36v-6.1Z"
						transform="translate(0.04 0.01)"
						fill="#f5f5f5"
					/></svg
				></a
			>
		</div>

		<div
			class="relative z-[-50]  w-[100%] lg:h-[70vh] h-[60vh] md:h-[60vh] brightness-[.65]"
			style="background-image: url(/herobg.png);" >
			<!-- <div class="w-[100%]  h-[120vh]"></div> -->
		</div>
	</div>
</section>

<style>
	@media only screen and (max-width: 640px) {
		.nav {
			grid-template-columns: 1fr 1fr;
		}
	}
	.nav {
		grid-template-columns: 1fr 250px 1fr;
	}
	.button-menu {
		/* padding: 15px 30px; */
		border-radius: 34px;
		font-size: 18px;
		display: flex;
		align-items: center;
		transition: background-color 0.4s ease, background 0.4s ease, color 0.4s ease;
		border: none;
	}

	.button-menu span {
		/* color: #fff; */
	}

	.button__icon svg {
		width: 24px;
		height: 24px;
		transition: all 0.4s ease;
		/* margin-right: 20px; */
		/* fill: #fff; */
	}

	.button-menu:hover .button__icon svg
	/* .button-menu:focus .button__icon svg */ {
		transform: rotate(90deg);
		transition: all 0.4s ease;
	}

	.menu-list {
		display: inline-block;
		position: relative;
		/* color: #0087ca; */
	}

	.menu-list::after {
		content: '';
		position: absolute;
		width: 100%;
		transform: scaleX(0);
		/* height: 3px; */
		bottom: 0;
		left: 0;
		background-color: #0c1637;
		transform-origin: bottom right;
		transition: transform 0.25s ease-out;
	}

	.menu-list:hover::after {
		transform: scaleX(1);
		transform-origin: bottom left;
	}
</style>
