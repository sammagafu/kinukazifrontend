<template>
    <section class="dark:bg-slate-900 py-32">
        <div class="h-1/4 container mx-auto">
            <h2 class="font-extrabold lg:text-6xl md:text-3xl text-orange-300 text-center">Find Machine to rent</h2>
        </div>
        <div class="container mx-auto filter lg:py-8 md:py-4">
            <form action="">
                <div class="grid sm:grid-cols-1 lg:grid-cols-5 gap-6 px-5">

                    <input type="text" id="email-address-icon"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter Equipment Name">

                    <input type="text" id="email-address-icon"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="What is Your Location">

                    <input type="text" id="email-address-icon"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter Product name">

                    <input type="date" id="email-address-icon"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter Product name">

                    <input type="submit"
                        class="text-white bg-blue-700 w-full block hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm mx-2 px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        placeholder="Enter Product name">

                </div>
            </form>
        </div>
    </section>

    <section class="products dark:bg-slate-900 py-32 text-white">
        <div class="container mx-auto">
            <div class="flex flex-row">
                <div class="basis-1/4 h-screen bg-slate-700 mr-3">
                    <div class="sidebar p-6">
                        <div class="heading">
                            <h4 class="font-bold text-xl">Categories</h4>
                        </div>
                        <div v-for="cat in machine" class="py-3">
                            {{ cat.industry.categoryname }}
                        </div>
                    </div>
                </div>

                <div class="basis-3/4 ml-8" v-for="item in machine">
                    <div class="bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mb-6">
                        <div class="flex flex-row">
                        <router-link :to="{name:'detail',params:{slug:item.slug}}" class="w-1/4">
                            <img :src="item.images[0].images" alt="product image">
                        </router-link>
                        <div class="px-5 py-5 w-full">
                            <router-link :to="{name:'detail',params:{slug:item.slug}}"><h5 class="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{{ item.productName }}</h5></router-link>
                            <span class="py-3 text-sm text-gray-700">{{ item.brand }}</span>
                                <!-- <div class="">
                                    <ul class="text-gray-500 text-sm">
                                        <li>Brand: Wacker Neuson</li>
                                        <li>Manufacture Year: 2019</li>
                                        <li>Model: EZ17</li>
                                        <li>Operating Weight: 1.7 Ton</li>
                                        <li>Maximum Reach: 4 Meter</li>
                                    </ul>
                                </div> -->
                                <div class="flex justify-between">
                                    <span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                                    <a href="#"
                                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Rent</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axiosInstance from '../../http';
import { ref, onMounted } from 'vue';
export default {
    name: 'MachineList',
    setup() {
        const machine = ref([])
        const category = ref([])
        onMounted(() => {
            axiosInstance.get('machine/').then(response => {
                machine.value = response.data
            }).catch(error => {
                console.log('error :>> ', error);
            })
        })

        return {
            machine,
        }
    }

}
</script>