<script setup lang="ts">
import Button from "primevue/button"
</script>

<template>
  <div class="flex justify-content-between px-4 border-1 border-white">
    <div>
      <button>arrow</button>
      <h2>Dashboard</h2>
    </div>
    <div class="flex">
      <Button class="p-button-link" icon="pi pi-check" />
      <Button class="p-button-link" icon="pi pi-cog" />
      <Button class="p-button-link" icon="pi pi-user" />
    </div>
  </div>
</template>