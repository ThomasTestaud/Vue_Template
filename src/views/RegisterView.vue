<template>
	<main>
		<div class="pt-14"></div>
		<div class="border border-gray-300 rounded-lg lg:w-4/12 md:w-6/12 w-8/12 m-auto p-4">
			<!-- Formulaire de connexion -->
			<div class="flex flex-col">
				<h2 class="text-center mb-2">Create a new account</h2>
				<p class="text-red-500 text-center text-xs">{{ errors }}</p>
				<hr>
				<label class="mt-4 text-sm text-gray-700">Username :</label>
				<input v-model="username" type="text" class="bg-gray-100 rounded-lg px-2 py-1">
				
				<label class="mt-4 text-sm text-gray-700">Email :</label>
				<input v-model="email" type="text" class="bg-gray-100 rounded-lg px-2 py-1">
				
				<label class="mt-4 text-sm text-gray-700">Password :</label>
				<input v-model="password" type="password" class="bg-gray-100 rounded-lg px-2 py-1">
				
				<label class="mt-4 text-sm text-gray-700">Confirm your password :</label>
				<input v-model="confirmPassword" type="password" class="bg-gray-100 rounded-lg px-2 py-1">
				<button @click="login()"  class="bg-green-500 hover:bg-green-400 rounded-lg my-4 text-white py-1">Register</button>
				<router-link class="text-blue-600 hover:text-blue-900 underline" to="/login">I already have an account</router-link>

			</div>
			
		</div>
	</main>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

let email = ref('');
let username = ref('');
let password = ref('');
let confirmPassword = ref('');
let errors = ref('');

const login = () => {
	axios.post(import.meta.env.VITE_API_URL + "/user/register", {
		email: email.value,
		username: username.value,
		password: password.value,
	})
		.then((response) => {
			if (response.data.auth) {
				localStorage.setItem("token", response.data.token);
			}
		})
		.catch((error) => {
			console.log(error);
			errors.value = "Erreur de connexion avec le serveur. Revenez plus tard.";
		});
};
</script>