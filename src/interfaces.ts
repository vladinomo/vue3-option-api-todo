export type TodoStatus = 'todo' | 'done' | 'deleted'

export type Todo = {
  id: string
  content: string
  status: TodoStatus
  createdAtUnix: number
} 