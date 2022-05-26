<script setup lang="ts">
import { ref,onBeforeUnmount} from "vue"

let messages = ref<any[]>([])

const ws = new WebSocket("ws://localhost:8001/ws")
ws.onopen = function () {
  console.log('Connected')
}

ws.onmessage = function (evt) {
  messages.value.push(evt.data)
}

setInterval(function () {
  ws.send('Hello, Server!');
}, 1000);

function end (){
  console.log("closing ws connection")
  ws.close()
}

onBeforeUnmount(()=>{
  ws.close()
})
</script>

<template>
  <div>
    <p>{{messages}}</p>
    <button @click="end">Send</button>
  </div>
</template>