<template>
  <div>
    <input :value="input" @input="$emit('on-input')" type="text" placeholder="buy milk..." />
    <button @click="$emit('on-submit')">submit</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  props: {input: {type: String, required: true}},
  emits: ["on-input", "on-submit"]
})
</script>

<style scoped>

</style>