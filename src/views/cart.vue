<script setup lang="ts">
import { ref } from "vue"

import useCartStore from "../stores/useCartStore"

const { cart, cartLength, cartPrice } = useCartStore()
</script>

<template>
	<div class="w-screen min-h-screen py-4">
		<div class="w-11/12 mx-auto">
			<h1 class="mb-4 text-center">
				<router-link class="float-left" to="/">Back</router-link>
				Cart
			</h1>
			<table class="border-collapse">
				<thead>
					<tr>
						<th>Name</th>
						<th>Quantity</th>
						<th>Unit Price</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					<tr v-if="cartLength < 1">
						<td colspan="3">No items in cart</td>
					</tr>
					<tr v-for="item in cart" :key="item.id">
						<td>{{ item.name }}</td>
						<td>{{ item.quantity }}</td>
						<td>{{ item.price }}</td>
						<td>{{ item.price * item.quantity }}</td>
					</tr>
				</tbody>
				<p>
					Total Price: <span>{{ cartPrice }}</span>
				</p>
				<router-link to="/client">Continue</router-link>
			</table>
		</div>
	</div>
</template>
