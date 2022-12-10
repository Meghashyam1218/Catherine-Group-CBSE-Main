<script>

    let items = [
        {
            name: "Land Certificate",
            link: "/md/land_certificate.pdf"
        },
        {
            name: "Society",
            link: "/md/society.pdf"
        },
        {
            name: "NOC",
            link: "/md/noc.pdf"
        },
        {
            name: "Recognition",
            link: "/md/recognitio.pdf"
        },
        {
            name: "Building Safety",
            link: "/md/building_safety.pdf"
        },
        {
            name: "Fire Safety",
            link: "/md/fire.pdf"
        },
        {
            name: "Self Certificate",
            link: "/md/selfaffidavit.pdf"
        },
        {
            name: "Sanitation",
            link: "/md/sanitary.pdf"
        },
        {
            name: "Fee Structure",
            link: "/md/fee.pdf"
        },
        {
            name: "Academic Calendar",
            link: "/md/academiccalender.pdf"
        },
        {
            name: "SMC",
            link: "/md/smc.pdf"
        },
        {
            name: "PTA",
            link: "/md/pta.pdf"
        },
        {
            name: "Results",
            link: "#"
        },
        {
            name: "Staff List",
            link: "/md/staff_list.pdf"
        }
    ]
</script>

<section>
    <div class="md:w-[70%]  md:mx-[auto]">
        <div class="m-3 md:mx-[auto] rounded-xl overflow-x-auto shadow-md sm:rounded-lg ">
            <table class="rounded w-full text-sm text-left text-gray-400  justify-center">
                <tbody class="items-center">
                {#each items as item, i}
                    <tr class={`${i%2 === 0 ? "bg-white gray-700" : "bg-gray-200 gray-700"} `}>
                        <th scope="row"
                            class="hidden sm:block py-4 px-6 font-medium mx-[auto] text-black whitespace-nowrap">
                            {i + 1}.
                        </th>
                        <td class="py-2 xs:py-4 px-3 xs:px-6 text-black ">
                            {item.name}
                        </td>
                        <td class="py-4 px-6 text-black">
                            <a href={`${item.link}`}
                               class="font-medium hover:text-blue-500 hover:underline">
                                <button class="rounded-lg px-2 xs:px-4 py-2 xs:py-2 text-xs xs:text-base bg-white hover:bg-gray-800 text-gray-800 hover:text-white transition-colors shadow-md">
                                    View
                                </button>
                            </a>
                        </td>
                        <td class="py-4 px-6 flex justify-center">
                            <a href={`${item.link}`} download
                               class="font-medium text-black hover:text-blue-500 hover:underline">
                                <button class="rounded-lg px-2 xs:px-4 py-2 xs:py-2 text-xs xs:text-base bg-gray-800 hover:bg-white hover:text-gray-800 text-white shadow-md transition-colors">
                                    Download
                                </button>
                            </a>
                        </td>
                    </tr>
                {/each}
                </tbody>
            </table>
        </div>
    </div>
</section>


