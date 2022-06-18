<script setup lang="ts">

const events = new EventSource("http://localhost:8000/user/sse")

events.addEventListener("open", (ev) => {
	console.log("conected to sse", ev)
})

events.addEventListener("message", (ev) => {
	console.log("new event message", ev)
})

events.addEventListener("error", (ev) => {
	console.log("sse error", ev)
})

function test() {
	console.log("closing connection")
	events.close()
}
</script>

<template>
	<div class="w-screen min-h-screen">
		<div class="w-11/12 mx-auto">
			<h1 class="mb-4 text-center">User</h1>
			<hr />
			<button @click="test">Action</button>
		</div>
	</div>
</template>
