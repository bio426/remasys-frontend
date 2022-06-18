<script setup lang="ts">
import { PropType } from "vue"

import { IProduct } from "../interfaces"
import useCartStore from "../stores/useCartStore";

const props = defineProps({
	product: {
		type: Object as PropType<IProduct>,
		required: true,
	},
})

const {addToCart} = useCartStore()

function cartAction(){
	addToCart(props.product)
}
</script>

<template>
	<div class="flex flex-col border border-black rounded-lg">
		<img class="h-60 w-full object-cover" :src="props.product.image" alt="" />
		<div class="flex-1 p-4">
			<h4 class="mb-2 text-2xl font-bold">{{ props.product.name }}</h4>
			<p>{{ props.product.description }}</p>
		</div>
		<div class="flex gap-4 w-full p-4">
			<button class="w-full py-2 bg-slate-500 text-white rounded font-bold" @click="cartAction">
				Add to cart
			</button>
			<button
				class="w-full py-2 text-slate-500 border border-slate-500 rounded font-bold"
			>
				Add to cart
			</button>
		</div>
	</div>
</template>
