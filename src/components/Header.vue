<template>
    <header class="border-b p-2">
        <div class="flex justify-between items-center">
            <div class="flex items-center">
                <h1 class="font-bold text-xl mr-2">My App</h1>
                <nav>
                    <RouterLink class="mr-2 text-gray-700" to="/">Home</RouterLink>
                    <RouterLink class="mr-2 text-gray-700" to="/about">About</RouterLink>
                </nav>
            </div>
            <button @click="toggleUserMenu()">
                <i class="fa-regular fa-circle-user"></i>
            </button>
            <div @click="toggleUserMenu()" v-if="userMenuOpen" class="absolute right-1 top-12 border rounded  text-sm">
                <RouterLink class="block py-1 px-2 hover:bg-gray-200" to="/profile">Profile</RouterLink>
                <hr>
                <button class="bg-red-500 hover:bg-red-400 text-white py-1 px-2 rounded-b" @click="disconnect">
                    Sign out
                </button>
            </div>
        </div>
    </header>
</template>

<script>
import { RouterLink } from 'vue-router';
import router from '../router'
export default {
    data() {
        return {
            userMenuOpen: false
        };
    },
    methods: {
        disconnect() {
            localStorage.removeItem('token');
            router.push('/login');
        },
        toggleUserMenu() {
            this.userMenuOpen = !this.userMenuOpen;
        }
    },
    components: { RouterLink }
}
</script>
