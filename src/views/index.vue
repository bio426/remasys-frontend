<script setup lang="ts">
import { ref } from "vue"

import { Product } from "../interfaces/index"
import FakeProducts from "../services/fakeData"
import useCartStore from "../stores/useCartStore"
import useCart from "../composables/useCart"

import FloatCart from "../components/FloatCart.vue"

const { cart, addToCart } = useCartStore()
const { toogleCart } = useCart()

let productsList = new FakeProducts()
let products = ref<Product[]>([])
products.value = productsList.get()

function orderProduct(product: Product) {
  addToCart(product)
}

</script>

<template>
  <div class="w-screen min-h-screen py-4">
    <div class="w-11/12 mx-auto">
      <h1 class="mb-4 text-center">Products</h1>
      <Button class="w-full" label="Toogle cart" @click="toogleCart" />
      <div class="grid">
        <div class="col-12 md:col-6 p-2" v-for="product in products" :key="product.id">
          <div>
            {{ product.name }}
            <button class="" @click="orderProduct(product)">Order</button>
          </div>
        </div>
      </div>
    </div>
    <FloatCart />
  </div>
</template>