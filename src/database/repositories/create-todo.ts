import { Todo } from '@/@types'
import { database } from '../index'
import { TodoModel } from '../models/todos-model'
import { Optional } from '@/@types/utils'

type TodoCreate = Optional<Todo, 'id' | 'createdAt'>

async function createTodo(todo: TodoCreate) {
  return await database.write(async () => {
    await database.get<TodoModel>('todos').create((data) => {
      data.description = todo.description
      data.completed = todo.completed
    })
  })
}

export { createTodo, type TodoCreate }
