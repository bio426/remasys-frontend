<script setup lang="ts">
import { useRouter } from "vue-router"

import useCart from "../composables/useCart"
import useCartStore from "../stores/useCartStore"

const router = useRouter()
const { showCart, toogleCart } = useCart()
const { cart } = useCartStore()

function toCart() {
  router.push("/cart")
  toogleCart()
}
</script>

<template>
  <div class="">
    <i>xd</i>
  </div>
</template>