<script setup lang="ts">
import useSidebar from "../composables/useSidebar"

import UserContent from "./sidebar/User.vue"
import CartContent from "./sidebar/Cart.vue"

const { isVisible, sidebarContent, hideSidebar } = useSidebar()

function setContent() {
	switch (sidebarContent.value) {
		case "UserContent":
			return UserContent
		case "CartContent":
			return CartContent
		default:
			return UserContent
	}
}
</script>

<template>
	<div class="fixed top-0 left-0 w-screen h-screen bg-sidebar" v-if="isVisible">
		<div class="absolute top-0 right-0 w-3/4 h-screen p-4 bg-white">
			<button class="float-right" @click="hideSidebar()">
				<i class="gg-close-o"></i>
			</button>
			<h4>My sidebar</h4>
			<div class="border border-red">
				<component :is="setContent()" />
			</div>
		</div>
	</div>
</template>

<style>
.bg-sidebar {
	background-color: rgba(0, 0, 0, 0.5);
}
</style>
