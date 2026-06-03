<script lang="ts">
    import type { ApexOptions } from "apexcharts";
  import { Chart } from "@flowbite-svelte-plugins/chart";
  import { Card, A, Button, Dropdown, DropdownItem } from "flowbite-svelte";
  import { ChevronRightOutline, ChevronDownOutline } from "flowbite-svelte-icons";

  let options: ApexOptions = {
    chart: {
      height: "400px",
      type: "area",
      fontFamily: "Inter, sans-serif",
      dropShadow: {
        enabled: false
      },
      toolbar: {
        show: false
      }
    },
    tooltip: {
      enabled: true,
      x: {
        show: false
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.55,
        opacityTo: 0,
        shade: "#1C64F2",
        gradientToColors: ["#1C64F2"]
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 6
    },
    grid: {
      show: false,
      strokeDashArray: 4,
      padding: {
        left: 2,
        right: 2,
        top: 0
      }
    },
    series: [
      {
        name: "New users",
        data: [6500, 6418, 6456, 6526, 6356, 6456],
        color: "#1A56DB"
      }
    ],
    xaxis: {
      categories: ["01 February", "02 February", "03 February", "04 February", "05 February", "06 February", "07 February"],
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      show: false
    }}
    ;
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
    <div class="flex flex-row flex-1">
        <div class="flex flex-col flex-1">
            <div class="flex flex-col flex">
                <Card href="/cards" class="p-4 sm:p-6 md:p-8">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    <p class="leading-tight font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </Card>
            </div>
            <div class="flex flex-row flex-1">
                
                <Card class="p-4 md:p-6">
                    <div class="flex justify-between">
                        <div>
                        <h5 class="pb-2 text-3xl leading-none font-bold text-gray-900 dark:text-white">32.4k</h5>
                        <p class="text-base font-normal text-gray-500 dark:text-gray-400">Users this week</p>
                        </div>
                        <div class="flex items-center px-2.5 py-0.5 text-center text-base font-semibold text-green-500 dark:text-green-500">
                        12%
                        <ChevronRightOutline class="ms-1 h-6 w-6" />
                        </div>
                    </div>
                    <Chart {options} />
                    <div class="grid grid-cols-1 items-center justify-between border-t border-gray-200 dark:border-gray-700">
                        <div class="flex items-center justify-between pt-5">
                        <Button class="inline-flex items-center bg-transparent py-0 text-center text-sm font-medium text-gray-500 hover:bg-transparent hover:text-gray-900 focus:ring-transparent dark:bg-transparent dark:text-gray-400 dark:hover:bg-transparent dark:hover:text-white dark:focus:ring-transparent">Last 7 days<ChevronDownOutline class="m-2.5 ms-1.5 w-2.5" /></Button>
                        <Dropdown simple class="w-40" offset={-6}>
                            <DropdownItem>Yesterday</DropdownItem>
                            <DropdownItem>Today</DropdownItem>
                            <DropdownItem>Last 7 days</DropdownItem>
                            <DropdownItem>Last 30 days</DropdownItem>
                            <DropdownItem>Last 90 days</DropdownItem>
                        </Dropdown>
                        <A href="/" class="hover:text-primary-700 dark:hover:text-primary-500 rounded-lg px-3 py-2 text-sm font-semibold uppercase hover:bg-gray-100 hover:no-underline dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                            Users Report
                            <ChevronRightOutline class="ms-1.5 h-2.5 w-2.5" />
                        </A>
                        </div>
                    </div>
                </Card>
                <Card href="/cards" class="p-4 sm:p-6 md:p-8">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    <p class="leading-tight font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </Card>
            </div>
        </div>
        
    </div>
    
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