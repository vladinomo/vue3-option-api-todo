<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
  props:{ title: {type:String, required: true} }
})

</script>

<template>
  <h1>{{title}}</h1>
  <slot name="main"></slot>
  </template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
