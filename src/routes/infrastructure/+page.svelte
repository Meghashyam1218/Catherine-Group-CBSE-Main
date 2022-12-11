<script>
    import Top from "$lib/components/top.svelte";
    import Labs from "./components/labs.svelte";
    import Footer from "$lib/components/footer.svelte";
	import Classroom from "./components/classroom.svelte";
	import Playground from "./components/playground.svelte";
    import Library from "./components/library.svelte";
</script>

<Top name="Infrastructure" heading="Infrastructure" bgImage="./top-1.jpg"/>
<Classroom/>
<Labs/>
<Library/>
<Playground/>
<Footer/>