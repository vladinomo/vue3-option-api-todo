<script lang="ts">
import {v4 as uuid} from 'uuid'
import { defineComponent } from "vue"
import dayjs from "dayjs"

import { Layout } from "../../common"
import { TodoList, TodoForm } from "./index"
import { Todo } from "../../../interfaces"

export default defineComponent({
  components: { Layout, TodoList, TodoForm},
  data() {
    return {
      newTodo: "",
      todos: [] as Todo[]
    }
  },
  methods: {
    onSubmit() {
      if (!this.newTodo) {
        return
      }

      const newTodo: Todo = {
        id: uuid(),
        content: this.newTodo,
        status: "todo",
        createdAtUnix: dayjs().unix() 
      }

      this.newTodo = ""
      this.todos = [...this.todos, newTodo]
    },
    onInput(e: any) {
      this.newTodo = e.target.value
    },
    toggleTodoItemStatus(id: string) {
      console.log(id)
      this.todos.forEach(todo => {
        if (todo.id !== id) return
        switch (todo.status) {
          case "done":
            todo.status = "todo"
            break;
          case "todo":
            todo.status = "done"
            break;
        
          default:
            break;
        }
      })
    }
  }
})
</script>

<template>
  <Layout title="Todo">
    <template v-slot:main>
      <TodoForm :input="newTodo" @input="onInput" @on-submit="onSubmit" />
      <TodoList :list="todos" @on-click-item="toggleTodoItemStatus"/>
    </template>
  </Layout>
</template>

<style scoped>

</style>