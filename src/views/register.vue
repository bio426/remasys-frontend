<script setup lang="ts">
import { reactive } from "vue"

import AuthService from "../services/auth.service"

let data = reactive({
	email: "",
	password: "",
	confirm: "",
})

function register() {
	if (data.password != data.confirm) {
		alert("Missmatch")
		return
	}
	AuthService.registerUser(data.email, data.password).then((res) =>
		console.log(res)
	)
}
</script>

<template>
	<div class="w-screen min-h-screen">
		<div class="w-11/12 mx-auto">
			<h1 class="mb-4 text-center">Register</h1>
			<hr />
			<label class="block">
				Email:
				<input class="block" type="text" v-model="data.email" />
			</label>
			<label class="block">
				Password:
				<input class="block" type="password" v-model="data.password" />
			</label>
			<label class="block">
				Confirm Password:
				<input class="block" type="password" v-model="data.confirm" />
			</label>
			<button @click="register">Register</button>
		</div>
	</div>
</template>
