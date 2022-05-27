<script setup lang="ts">
import { ref } from "vue"

import Card from "primevue/card"
import Button from "primevue/button"
import { useToast } from "primevue/usetoast"

import { Product } from "../interfaces"
import FakeProducts from "../services/fakeData"
import useCartStore from "../stores/useCartStore"
import useCart from "../composables/useCart"

const { cart, addToCart } = useCartStore()
const { toogleCart } = useCart()
const toast = useToast()

let productsList = new FakeProducts()
let products = ref<Product[]>([])
products.value = productsList.get()

function orderProduct(product: Product) {
  addToCart(product)
  toast.add({ severity: 'info', summary: 'Product Added', detail: `${product.name} was added to the cart`, life: 3000 })
}

</script>

<template>
  <div class="w-full min-h-screen py-8 bg-gray-900">
    <div class="w-11 md:w-8 mx-auto">
      <h1 class="mb-4 text-white text-center">Products</h1>
      <Button class="w-full" label="Toogle cart" @click="toogleCart" />
      <div class="grid">
        <div class="col-12 md:col-6 p-2" v-for="product in products" :key="product.id">
          <Card>
            <template #title>
              {{ product.name }}
            </template>
            <template #content>
              {{ product.description }}
            </template>
            <template #footer>
              <Button class="w-full" label="Order" @click="orderProduct(product)" />
            </template>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>