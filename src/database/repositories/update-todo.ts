import { Todo } from '@/@types'
import { database } from '../index'
import { TodoModel } from '../models/todos-model'
import { Optional } from '@/@types/utils'

type TodoUpdate = Optional<Todo, 'createdAt'>

async function updateTodo(todo: TodoUpdate) {
  return await database.write(async () => {
    const todoModel = await database.get<TodoModel>('todos').find(todo.id)
    await todoModel.update((data) => {
      data.description = todo.description
      data.completed = todo.completed
    })
  })
}

export { updateTodo, type TodoUpdate }
