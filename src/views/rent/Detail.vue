<template>
    <div class="py-32 text-center">
        <h2 class=" font-extrabold lg:text-6xl md:text-3xl text-indigo-900">TZS {{ machine.price }}</h2>
        <p class="font-bold">{{ machine.productName }} {{ machine.brand }}</p>
    </div>
    <div class="container mx-auto">
        <div class="flex flex-row">

            <div class="w-1/2 pb-32">
                <carousel :items-to-show="1" :wrap-around="true">
                    <slide v-for="image in machine.images" :key="image.index">
                        <div class="relative mx-3">
                            <img :src="image.images" alt="" class="rounded shadow-sm">
                        </div>
                    </slide>
                    <template #addons>
                        <Navigation />
                        <Pagination />
                    </template>
                </carousel>
            </div>

            <div class="w-1/2 text-black">
                <div class="pb-3 mx-3">
                    <h3 class="text-4xl font-bold pb-2">
                        {{ machine.productName }}
                    </h3>
                    <span>Brand {{ machine.brand }}</span>
                    <div class="my-4 py-4 bg-gray-100 px-3 rounded-sm">
                        <h3 class="text-2xl font-bold">Machine Description</h3>
                        <p>{{ machine.descripton }}</p>
                    </div>
                    <div class="my-4 py-4 bg-gray-100 px-3 rounded-sm">
                        <h3 class="text-2xl font-bold">Machine Renting Terms</h3>
                        <p>{{ machine.terms }}</p>
                    </div>
                </div>
            </div>
<!-- 
            <div class="w-2/5 text-black bg-gray-200">
            </div> -->
        </div>
    </div>
</template>
<script>
import axiosInstance from '../../http';
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
    name: "Rental",
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
    setup() {
        const machine = ref([])
        const route = useRoute()

        onMounted(() => {
            axiosInstance.get(`machine/${route.params.slug}/`)
                .then(response => {
                    machine.value = response.data
                }).catch(error => {
                    console.log('error :>> ', error);
                });
        })


        return {
            machine,
        }
    }

}

</script>