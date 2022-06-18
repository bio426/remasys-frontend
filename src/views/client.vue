<script setup lang="ts">
import { ref, reactive } from "vue"

import AddressModal from "../components/modal/Address.vue"

let clientData = reactive({
	name: "",
	phone: "",
	address: "",
	cords: { lat: 0, lng: 0 },
})

let showSelector = ref(false)
</script>

<template>
	<div class="w-screen min-h-screen py-4">
		<div class="w-11/12 mx-auto">
			<h1 class="mb-4 text-center">
				<router-link class="float-left" to="/cart">Back</router-link>
				User Data
			</h1>
			<label class="block">
				Name
				<input
					class="block w-full p-2 border border-gray-300 rounded"
					type="text"
					v-model="clientData.name"
				/>
			</label>
			<label class="block">
				Phone
				<input
					class="block w-full p-2 border border-gray-300 rounded"
					type="text"
					v-model="clientData.phone"
				/>
			</label>
			<label class="block">
				Address
				<div class="flex gap-4">
					<input
						class="flex-1 p-2 border border-gray-300 roundedI"
						type="text"
						disabled
						v-model="clientData.address"
					/>
					<button class="p-2 bg-gray-300 rounded" @click="showSelector = true">
						Select
					</button>
				</div>
			</label>
		</div>
		<AddressModal v-if="showSelector" @close="showSelector = false" />
	</div>
</template>
