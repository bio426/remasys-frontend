<script setup lang="ts">
import { } from "vue"

import Card from "primevue/card"
import Button from "primevue/button"

import Topbar from "../components/Topbar.vue"
</script>

<template>
  <div class="w-full min-h-screen bg-gray-900">
    <Topbar />
    <div class="grid w-7 mx-auto">
      <div class="col-4 p-2" v-for="i in 10">
        <Card>
          <template #title>
            My custom card
          </template>
          <template #content>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor inventore provident nam minus ipsum quis
            explicabo quibusdam repellat rerum laboriosam, impedit labore iusto ex commodi itaque nemo aspernatur porro
            ad!
          </template>
          <template #footer>
            <Button class="p-button-sm p-button-danger" label="Text" icon="pi pi-times" />
            <Button class="p-button p-button-danger" label="Something" icon="pi pi-times" />
            <Button class="p-button-lg p-button-danger" label="Something Big" icon="pi pi-times" />
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>