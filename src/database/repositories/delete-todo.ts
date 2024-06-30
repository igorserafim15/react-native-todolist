import { database } from '../index'
import { TodoModel } from '../models/todos-model'

async function deleteTodo(id: string) {
  return await database.write(async () => {
    const todoModel = await database.get<TodoModel>('todos').find(id)
    await todoModel.destroyPermanently()
  })
}

export { deleteTodo }
