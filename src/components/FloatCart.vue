<script setup lang="ts">
import { computed } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()
</script>

<template>
	<div
		class="fixed bottom-6 right-6 p-4 bg-white border border-black rounded-full"
		@click="router.push('cart')"
	>
		<i class="gg-shopping-cart text-black" style="--ggs: 1.5" />
	</div>
</template>

<style>
.iconsize {
	--ggs: 10;
}
</style>
