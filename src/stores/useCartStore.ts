import { computed, ref } from "vue"

import { ICartItem, IProduct } from "../interfaces"

let cart = ref<ICartItem[]>([])
let cartLength = computed(() => {
	let count = 0
	cart.value.forEach((item) => (count += item.quantity))
	return count
})
let cartPrice = computed(() => {
	let total = 0
	cart.value.forEach((item) => (total += item.price * item.quantity))
	return total
})

function addToCart(product: IProduct) {
	let index = cart.value.findIndex((item) => item.id == product.id)
	if (index != -1) {
		cart.value[index].quantity++
		return
	}
	cart.value.push({ ...product, quantity: 1 })
}

export default function () {
	return { cart, cartLength, cartPrice, addToCart }
}
