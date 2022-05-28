import { ref } from "vue"

import { ICartItem, IProduct } from "../interfaces"

let cart = ref<ICartItem[]>([])

function addToCart(product: IProduct) {
  cart.value.push({ ...product, quantity: 1 })
}

export default function () {
  return { cart, addToCart }
}