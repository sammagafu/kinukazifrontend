<template>
    <section class="bg-black/50 bg-[url('../assets/images/slideshow-2.jpg')] bg-cover bg-center bg-no-repeat">
        <div class="bg-black/50"></div>
        <div class="container mx-auto py-64">
            
            <div class="z-30 text-center">
                <div>
                    <h2 class="text-6xl font-bold text-gray-50">
                        Welcome to kinukazi
                    </h2>
                    <p class="text-3xl text-gray-50 font-baseline">Your one-stop source for all equipments rental needs
                    </p>
                </div>
            </div>
                <div class="w-1/2 mx-auto">
                    <div class="text-center">
                    <h2 class="text-gray-50 font-bold text-xl pb-3">
                        Find The Right Equipment
                    </h2>
                </div>
                    <form>
                        <label for="search"
                            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                        <div class="relative">
                            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </div>
                            <input type="search" id="search"
                                class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="What are you looking for?" required>
                            <button type="submit"
                                class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                        </div>
                    </form>
                </div>
        </div>
    </section>

    <section class="category py-16 dark:bg-slate-800 ">
        <div class="text-center dark:text-slate-300 py-12">
            <p class="text-xs">We Promise To Find You The Right Equipment</p>
            <h2 class="text-4xl font-bold">Browse Machinery Categories</h2>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 container mx-auto">
            <div class="rounded-lg">
                <img src="../assets/images/category/category-1.jpeg" alt="">
                <div class="hidden">
                    <div class="text">Aerial Work Platforms, Scaffolding and Ladders</div>
                </div>
            </div>

            <div class="rounded-lg">
                <img src="../assets/images/category/category-1.jpeg" alt="">
                <div class="hidden">
                    <div class="text">Construction Tools</div>
                </div>
            </div>

            <div class="rounded-lg">
                <img src="../assets/images/category/category-3.jpeg" alt="">
                <div class="hidden">
                    <div class="text">Air Compressors And Air Tools</div>
                </div>
            </div>

            <div class="rounded-lg">
                <img src="../assets/images/category/category-1.jpeg" alt="">
                <div class="hidden">
                    <div class="text">Compaction</div>
                </div>
            </div>

            <div class="rounded-lg">
                <img src="../assets/images/category/category-1.jpeg" alt="">
                <div class="hidden">
                    <div class="text">Concrete and Mansory</div>
                </div>
            </div>

            <div class="rounded-lg">
                <img src="../assets/images/category/category-1.jpeg" alt="">
                <div class="hidden">
                    <div class="text">Earth Moving</div>
                </div>
            </div>

            <div class="rounded-lg">
                <img src="../assets/images/category/category-1.jpeg" alt="">
                <div class="hidden">
                    <div class="text">Facility Mantainance and Cleaning</div>
                </div>
            </div>

            <div class="rounded-lg">
                <img src="../assets/images/category/category-1.jpeg" alt="">
                <div class="hidden">
                    <div class="text">Fork lifts</div>
                </div>
            </div>

        </div>

    </section>

    <section class="py-16 dark:bg-slate-800">
        <div class="container mx-auto">
            <div class="text-center dark:text-slate-300 py-12">
            <p class="text-xs">We Promise To Find You The Right Equipment</p>
            <h2 class="text-4xl font-bold">Latest Products</h2>
        </div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
<div class="bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <div class="flex flex-row">
        <a href="#">
            <img src="../assets/images/products/1.jpeg" alt="product image">
        </a>
        <div class="basis-full px-5 py-5">
            <a href="#">
                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Standard
                    Excavator</h5>
            </a>
            <div class="">
                <ul class="text-gray-500 text-sm">
                    <li>Brand: Wacker Neuson</li>
                    <li>Manufacture Year: 2019</li>
                    <li>Model: EZ17</li>
                    <li>Operating Weight: 1.7 Ton</li>
                    <li>Maximum Reach: 4 Meter</li>
                </ul>
            </div>
            <div class="flex items-center mt-2.5 mb-5">
                <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor"
                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>First star</title>
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                    </path>
                </svg>
                <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor"
                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Second star</title>
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                    </path>
                </svg>
                <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor"
                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Third star</title>
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                    </path>
                </svg>
                <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor"
                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Fourth star</title>
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                    </path>
                </svg>
                <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor"
                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Fifth star</title>
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                    </path>
                </svg>
                <span
                    class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
            </div>
            <div class="flex justify-between">
                <span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                <a href="#"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Rent</a>
            </div>
        </div>
    </div>
</div>
<div class="bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <div class="flex flex-row">
        <a href="#">
            <img src="../assets/images/products/1.jpeg" alt="product image">
        </a>
        <div class="basis-full px-5 py-5">
            <a href="#">
                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Standard
                    Excavator</h5>
            </a>
            <div class="">
                <ul class="text-gray-500 text-sm">
                    <li>Brand: Wacker Neuson</li>
                    <li>Manufacture Year: 2019</li>
                    <li>Model: EZ17</li>
                    <li>Operating Weight: 1.7 Ton</li>
                    <li>Maximum Reach: 4 Meter</li>
                </ul>
            </div>
            <div class="flex items-center mt-2.5 mb-5">
                <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor"
                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>First star</title>
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                    </path>
                </svg>
                <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor"
                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Second star</title>
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                    </path>
                </svg>
                <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor"
                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Third star</title>
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                    </path>
                </svg>
                <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor"
                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Fourth star</title>
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                    </path>
                </svg>
                <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor"
                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Fifth star</title>
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                    </path>
                </svg>
                <span
                    class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
            </div>
            <div class="flex justify-between">
                <span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                <a href="#"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Rent</a>
            </div>
        </div>
    </div>
</div>
<div class="bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <div class="flex flex-row">
        <a href="#">
            <img src="../assets/images/products/1.jpeg" alt="product image">
        </a>
        <div class="basis-full px-5 py-5">
            <a href="#">
                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Standard
                    Excavator</h5>
            </a>
            <div class="">
                <ul class="text-gray-500 text-sm">
                    <li>Brand: Wacker Neuson</li>
                    <li>Manufacture Year: 2019</li>
                    <li>Model: EZ17</li>
                    <li>Operating Weight: 1.7 Ton</li>
                    <li>Maximum Reach: 4 Meter</li>
                </ul>
            </div>
            <div class="flex items-center mt-2.5 mb-5">
                <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor"
                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>First star</title>
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                    </path>
                </svg>
                <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor"
                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Second star</title>
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                    </path>
                </svg>
                <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor"
                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Third star</title>
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                    </path>
                </svg>
                <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor"
                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Fourth star</title>
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                    </path>
                </svg>
                <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor"
                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Fifth star</title>
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                    </path>
                </svg>
                <span
                    class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
            </div>
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
    </section>
</template>
<script>
    export default {
        setup() {

        },
    }
</script>

<style scoped>
    .machinery {
        height: 60vh;
    }
</style>