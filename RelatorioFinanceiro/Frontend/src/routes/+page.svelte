<script>
    import HorizontalCard from "../Components/Cards/HorizontalCard.svelte";
</script>
    <div class="flex flex-col flex-1" id="Page">
        <h1 class="text-white text-3xl md:text-5xl w-full text-center py-12">WELCOME TO THE FINANCE DASHBOARD</h1>
        <div class="grid  lg:grid-cols-2 px-15 gap-15 justify-items-center">
            
            <HorizontalCard 
            title="PRACTICAL AND QUICK"
            text="You can see your finance with any device, any place, any moment. You can see fast, anytime."
            Image="/Assets/MainPage/Chart.png"/>
            
            <HorizontalCard 
            title="Secure"
            text="Our service uses modern technologies to ensure the security of your data."
            Image="/Assets/MainPage/Security.webp"/>
            
            <HorizontalCard 
            title="Simple and Complete"
            text="Our service uses a simple design to simplify your UI and make you use our service intuitively."
            Image="/Assets/MainPage/Design.webp"/>
            
            <HorizontalCard 
            title="Responsive"
            text="You can use our application in any device you have."
            Image="/Assets/MainPage/Responsive.jpg"/>    
        </div>
        <div class="flex w-full flex-row items-center justify-center py-15 px-10">
            <a href="/Login">
                <button
                type="button"
                class="transition-all duration-200 ease-in-out shadow-[0_4px_10px_rgba(0,0,255,0.5)] md:w-md w-full flex flex-row items-center justify-center text-white bg-blue-800 hover:shadow-[0_4px_10px_rgba(50,50,255,0.5)] hover:bg-blue-700 hover:cursor-pointer focus:ring-4 focus:ring-brand-medium font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
            >
                Go to login page
                <svg
                    class="ms-1.5 -me-0.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 12H5m14 0-4 4m4-4-4-4"
                    />
                </svg>
            </button>
            </a>
            
        </div>
    </div>
<style>
    @keyframes Start-Animation{
        from{
            opacity: 0;
            translate: 10% -10% ;
        }to{
            opacity: 1;
        }
    }
    #Page{
        animation: Start-Animation 1s;
    }
</style>