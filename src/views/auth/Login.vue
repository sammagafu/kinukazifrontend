<template>
    <section class="bg-black/50 bg-[url('../assets/images/login.jpg')] bg-cover bg-center bg-no-repeat">
        <div class="flex items-center justify-center min-h-screen">
            <div
                class="px-8 py-6 mx-4 mt-4 text-left bg-white dark:bg-slate-700 dark:text-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
                <!-- <img src="@/assets/images/logo.png" alt="" class="w-40"> -->
                <h3 class="text-2xl font-bold text-center">Login</h3>
                <form @submit.prevent="userLogin">
                    <div class="mt-4">

                        <div class="mt-4">
                            <label for="name">Username</label>

                            <!-- <label class="block" for="email">Email<label> -->
                            <input type="text" placeholder="Username"
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 dark:text-black" v-model="username"> 
                        </div>
                        <div class="mt-4">
                            <label for="name">Password</label>
                            <input type="password" placeholder="Password"
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 dark:text-black" v-model="password">
                        </div>
                        <!-- <span class="text-xs text-red-400">Password must be same!</span> -->
                        <div class="flex">
                            <button
                                class="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Login
                                to your Account</button>
                        </div>
                        <div class="mt-6 text-grey-dark">
                            I don't have an account?
                            <router-link :to="{ name: 'register' }" class="text-blue-600">Sign Up</router-link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
import axiosInstance from '../../http';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router'
export default {
    name: "Login",
    setup() {
        const username = ref("")
        const password = ref("")
        const route = useRouter()

        function userLogin(){
            const logindata = {
                username:username.value,
                password:password.value,
            }
            axiosInstance.post("auth/login/",logindata).then(response =>{
                console.log(response)
            }).catch(error => {
                console.log('eroor :>> ', eroor);
            })
            route.push({name:'home'})

        }

        return {
            username,
            password,
            userLogin
        }
    }
}
</script>