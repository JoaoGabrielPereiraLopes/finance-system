<script>
    let { title, text,Image } = $props();
import { onMount } from 'svelte';

    let sound;

    onMount(() => {
        sound = new Audio('/Audio/bem-vindo-ao-site_iClRjQ1.mp3');
        sound.preload = 'auto';
    });
    function playSound() {
        sound.currentTime = 0;
        sound.play();
    }
</script>
<a href="#" class="shadow-[0_0_20px_rgba(59,130,246,0.8)] flex flex-col items-center bg-blue-900 p-6 border border-default rounded-base md:flex-row md:max-w-xl md:flex-row md:max-w-xl text-white">
    <div class="flex md:w-64 h-64 md:h-[100%]">
        <img class="object-cover object-center w-full rounded-base mb-4 md:mb-0" src={Image} alt="">

    </div>
    <div class="flex flex-col justify-between md:p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-heading">{title}</h5>
        <p class="mb-6 text-body text-justify">{text}</p>
        <div class="w-full text-center">
            <button type="button" on:click={playSound} class="inline-flex items-center w-auto text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">

                Read more
                <svg class="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>
            </button>
        </div>
    </div>
</a>
