<script setup lang="ts">
import { reactive } from "vue"

let data = reactive({
	email: "",
	password: "",
	confirm: "",
})
</script>

<template>
	<div>
		<h1>Login</h1>
		<hr />
		<label>
			Email:
			<input type="text" v-model="data.email" />
		</label>
		<label>
			Password:
			<input type="password" v-model="data.email" />
		</label>
		<button>Login</button>
	</div>
</template>
