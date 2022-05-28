<script setup lang="ts">
import { ref } from "vue"

import { IProduct } from "../interfaces"
import FakeProducts from "../services/fakeData"
import useSidebar from "../composables/useSidebar"

import FloatCart from "../components/FloatCart.vue"
import Product from "../components/Product.vue"

const { showSidebar } = useSidebar()

let productsList = new FakeProducts()
let products = ref<IProduct[]>([])
products.value = productsList.get()
</script>

<template>
	<div class="w-screen min-h-screen py-4">
		<div class="w-11/12 mx-auto">
			<h1 class="mb-4 text-center">Products</h1>
			<button class="mb-4 mr-4 bg-pink-200" @click="showSidebar('CartContent')">
				Sidebar cart
			</button>
			<button class="mb-4 bg-pink-200" @click="showSidebar('UserContent')">
				Sidebar user
			</button>
			<div class="grid md:grid-cols-2 gap-4">
				<Product
					v-for="product in products"
					:key="product.id"
					:product="product"
				/>
			</div>
		</div>
		<FloatCart />
	</div>
</template>
