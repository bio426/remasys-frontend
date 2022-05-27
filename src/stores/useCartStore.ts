import { ref } from "vue"

import { CartItem, Product } from "../interfaces"

let cart = ref<CartItem[]>([])

function addToCart(product: Product) {
  cart.value.push({ ...product, quantity: 1 })
}

export default function () {
  return { cart, addToCart }
}