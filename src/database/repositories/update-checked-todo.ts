import { database } from '../index'
import { TodoModel } from '../models/todos-model'

async function updateCompletedTodo(id: string, completed: boolean) {
  return await database.write(async () => {
    const todoModel = await database.get<TodoModel>('todos').find(id)
    await todoModel.update((data) => {
      data.completed = completed
    })
  })
}

export { updateCompletedTodo }
