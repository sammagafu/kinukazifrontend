<template>
    <section class="dark:bg-slate-900 py-32">
        <div class="h-1/4 container mx-auto">
            <h2 class="font-extrabold lg:text-6xl md:text-3xl text-orange-600 text-center">Add machine for rent</h2>
        </div>

        <div class="container mx-auto filter lg:py-8 md:py-4">
            <form @submit.prevent="" enctype="multipart/form-data">
                <div class="mb-6">
                    <label for="machinename" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Machine Name</label>
                    <input type="text" id="machinename" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        placeholder="Mini Excavator Upto 5T" required>
                </div>
                <div class="mb-6">
                    <label for="machineManufacture" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Machine Manufacture</label>
                    <input type="text" id="machineManufacture" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        placeholder="Caterpillar" required>
                </div>
                <div class="mb-6">
                    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Machine Categories</label>
                    <select id="countries"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option v-for="cat in category" :key="cat.index">{{cat.categoryname}}</option>
                    </select>
                </div>

                <div class="mb-6">
                    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Machine Sub-Categories</label>
                    <select id="countries"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option v-for="cat in category" :key="cat.index">{{cat.categoryname}}</option>
                    </select>
                </div>
                <div class="mb-6">
                    <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Description</label>
                    <textarea id="description" rows="4"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="product description..."></textarea>
                </div>

                <div class="mb-6">
                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Renting Terms</label>
                    <textarea id="message" rows="4"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="write your renting terms..."></textarea>
                </div>

                <div class="mb-6">
                    <label for="rentingPrice" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Renting Price</label>
                    <input type="number" id="rentingPrice"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required step="10000">
                </div>

                <div class="mb-6">
                    <div class="flex items-center justify-center w-full">
                        <label for="dropzone-file"
                            class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12">
                                    </path>
                                </svg>
                                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to
                                        upload hold shift to select multiple</span> or drag and drop</p>
                                <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                            </div>
                            <input id="dropzone-file" type="file" class="hidden" multiple/>
                        </label>
                    </div>
                </div>

                

            </form>
        </div>
    </section>
</template>

<script>
import axiosInstance from '../../http';
import { ref,onMounted } from 'vue';


export default {
    name: 'AddMachine',
    setup(){
        const category = ref([])
        const subcategory = ref([])
        onMounted(() => {
            axiosInstance.get('category/').then((response) => {
                category.value = response.data
            }).catch((error) => {
                console.log(error)
            });
        })
        function addProduct(){
            console.log("thank you");
        }
        // TODO:: Make a function that will auto filter subcategory from sub
        // TODO:: Make a function that will auto filter subcategory from sub

        return{
            category,subcategory,addProduct
        }
    }    
}
</script>