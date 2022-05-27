import { ref } from "vue"

let showCart = ref(false)

function toogleCart() {
  showCart.value = !showCart.value
}

export default function () {
  return { showCart, toogleCart }
}