<script setup lang="ts">
import { useRouter } from "vue-router"
import useCartStore from "../stores/useCartStore"

const router = useRouter()
const { cartLength } = useCartStore()
</script>

<template>
	<div
		class="fixed bottom-6 right-6 p-4 bg-white border border-black rounded-full"
		@click="router.push('cart')"
	>
		<i class="gg-shopping-cart text-black" style="--ggs: 1.5"></i>
		<span
			class="absolute top-0 right-0 flex justify-center items-center w-6 h-6 bg-black text-white rounded-full"
			>{{ cartLength }}</span
		>
	</div>
</template>

<style>
.iconsize {
	--ggs: 10;
}
</style>
