<template>
    <div class="border rounded-lg lg:w-4/12 md:w-6/12 w-8/12 m-auto p-4 flex flex-col">
        <h2 class="text-center pb-2">Your profile</h2>
        <hr>
        <div class="mt-2 flex justify-between">
            <div>
                <span class="text-sm text-gray-700 mr-2">Username: </span>
                <span>{{ userData.username || 'Loading...' }}</span>
            </div>
            <button class="text-gray-400 hover:text-gray-600">
                <i class="fa-solid fa-pen-to-square"></i>
            </button>
        </div>
        <div class="flex justify-between">
            <div>
                <span class="text-sm text-gray-700 mr-2">Email: </span>
                <span>{{ userData.email || 'Loading...' }}</span>
            </div>
            <button class="text-gray-400 hover:text-gray-600">
                <i class="fa-solid fa-pen-to-square"></i>
            </button>
        </div>
    </div>

</template>
  
<script setup>
import axios from 'axios';
import { onMounted } from 'vue';
import { ref } from 'vue';

const userData = ref({}); // Initialize with an empty object

async function getUser() {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/user/`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        userData.value = response.data;
    } catch (error) {
        console.error(error);
    }
}

onMounted(getUser);
</script>
  