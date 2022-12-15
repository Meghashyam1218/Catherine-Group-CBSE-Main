<script>
    import Top from "$lib/components/top.svelte";
    
    import Footer from "$lib/components/footer.svelte";
	
	import Admissions from "./components/admissions.svelte";
	import Steps from "./components/steps.svelte";
</script>

<Top name="Admission" heading="Admission" bgImage="./top-1.jpg"/>

<Admissions/>
<Steps/>
<Footer/>