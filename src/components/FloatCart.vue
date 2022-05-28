<script setup lang="ts">
import { computed } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()
</script>

<template>
  <div class="fixed bottom-4 right-4 p-4 border border-black rounded-full">
    <i class="gg-alarm text-red-500" style="--ggs:1"></i>
  </div>
</template>

<style>
.iconsize{
  --ggs: 10
}
</style>
