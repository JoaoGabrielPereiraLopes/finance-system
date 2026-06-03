<script>
    let width = $state(0);
    let height = $state(0);

    $effect(() => {
        const update = () => {
            width = window.innerWidth;
            height = window.innerHeight;
        };

        update();
        window.addEventListener('resize', update);

        return () => {
            window.removeEventListener('resize', update);
        };
    });
</script>

{#if width > 1400}
    <div class="flex flex-row flex-1">
        <div class="w-1/3 min-h-screen flex relative overflow-y-hidden overflow-x-hidden">
            <div class="w-90 h-180 z-1 bg-[#0020F2] rounded-r-full absolute top-1/2 -translate-y-1/2"></div>
            <div class="w-140 h-280 z-0 bg-[#FFDD00] rounded-r-full absolute top-1/2 -translate-y-1/2"></div>
        </div>
        <div class="flex-1 min-h-screen flex flex-col px-20 py-15">
            <div class="flex flex-col flex-1 justify-evenly px-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
                <h2 class="livvic-black w-full  text-center">LOGIN</h2>

                <input
                    class="w-full Inter-bold mb-3 px-5 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="hermenegildo@god.com"
                />

                <input
                    type="password"
                    class="w-full Inter-bold mb-4 px-5 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="password"
                />

                <button class="w-1/3 ml-auto mr-auto Inter-bold rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition">
                    Entrar
                </button>
            </div>

        </div>
        
    </div>
{:else}
    <div class="w-md h-md bg-blue-600">legal</div>
{/if}
<style>
    .livvic-black {
        font-family: "Livvic", sans-serif;
        font-weight: 900;
        font-style: normal;
        font-size: 100px;
    }
    .Inter-bold {
        font-family: "Inter", sans-serif;
        font-weight: 700;
        font-style: normal;
        font-size: 30px;
    }
</style>