<script setup lang="ts">
import Sidebar from "./components/sidebar/Sidebar.vue"
</script>

<template>
	<router-view />
	<Sidebar />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato&family=Open+Sans:wght@300;400;500;600;700&display=swap");

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: "Lato", sans-serif;
	font-family: "Open Sans", sans-serif;
}
</style>
