<script setup lang="ts">
import { ref } from "vue"

const props = defineProps({
	title: {
		type: String,
		default: "Modal title",
	},
})

const emits = defineEmits(["close"])

let bg = ref<HTMLDivElement>()

function clickBg(e: Event) {
	if (e.target != bg.value) return
	console.log("click outside")
}
</script>

<template>
	<Teleport to="body">
		<div
			class="fixed left-0 top-0 w-screen h-screen bg-modal"
			ref="bg"
			@click="clickBg"
		>
			<div class="absolute top-16 bottom-0 w-full bg-white">
				<div
					class="flex justify-between items-center p-2 mb-2 border-b border-black"
				>
					<span class="text-xl font-bold">{{ props.title }}</span>
					<button class="float-right" @click="emits('close')">
						<i class="gg-close" style="--ggs: 1.2"></i>
					</button>
				</div>
				<div>
					<slot />
				</div>
			</div>
		</div>
	</Teleport>
</template>

<style>
.bg-modal {
	background-color: rgba(0, 0, 0, 0.5);
}
</style>
