<script setup lang="ts">
import Sidebar from "primevue/sidebar"
import DataTable from "primevue/datatable"
import Column from "primevue/column"
import Button from "primevue/button"


import useCart from "../composables/useCart"
import useCartStore from "../stores/useCartStore"

const { showCart } = useCart()
const { cart } = useCartStore()
</script>

<template>
  <Sidebar position="right" v-model:visible="showCart" class="p-sidebar-md">
    <template #header>
      <h2 class="w-full mr-auto text-left">Cart content</h2>
    </template>
    <div>
      <div>
        <DataTable :value="cart" class="p-datatable-sm" responsiveLayout="scroll">
          <Column field="name" header="Name" />
          <Column field="quantity" header="Quantity" />
          <Column field="price" header="Price" />
        </DataTable>
      </div>
      <Button label="To cart" />
    </div>
  </Sidebar>
</template>