<template>
  <li :class="listClass" @click="$emit('on-click-item', item.id)">
    {{item.content}}
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Todo } from '../../../interfaces'

export default defineComponent({
  props: {item: {
    type: Object as PropType<Todo>,
    required: true
  },},
  emits: ["on-click-item"],
  computed: {
    listClass() {
      return {
        done: this.item.status === "done"
      }
    }
  }
})
</script>

<style scoped>
li {
  list-style: none;
  cursor: pointer;
}
.done {
  text-decoration: line-through;
}
</style>