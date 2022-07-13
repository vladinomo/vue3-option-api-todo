<template>
  <div>
    <form class="filter-form">
      <div>
        <input type="radio" id="all" value="all" v-model="filter" />
      <label for="one">all</label>
      </div>
      <div>
        <input type="radio" id="todo" value="todo" v-model="filter" />
        <label for="todo">todo</label>
      </div>
      <div>
        <input type="radio" id="done" value="done" v-model="filter" />
        <label for="two">done</label>
      </div>
    </form>
    <ul>
      <TodoItem v-for="todo in filteredList" :key="todo.id" :item="todo" @on-click-item="onClickItem"/>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { TodoItem } from '.'
import { Todo, TodoStatus } from '../../../interfaces'

type TodoStatusFilter = Exclude<TodoStatus, "deleted"> | "all"
type TodoListData = {
  filter: TodoStatusFilter
}

export default defineComponent({
  props: { list: {type:Array as PropType<Array<Todo>>, required: true}},
  components: { TodoItem },
  emits: ["on-click-item"],
  data(): TodoListData {
    return {
      filter: 'all'
    } 
  },
  computed: {
    filteredList() {
      if (this.filter === "all") return this.list.filter(item => item.status !== "deleted")
      return this.list.filter(item=> item.status === this.filter)
    }
  },
  methods: {
    onClickItem(id: string) {
      this.$emit("on-click-item", id)
    }
  }
})
</script>

<style scoped>
.filter-form {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>