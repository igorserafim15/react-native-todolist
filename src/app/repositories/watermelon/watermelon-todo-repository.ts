import { TodoCreate, TodoUpdate } from '@/app/entities/todo'
import { TodoRepository } from '../todo-repository'
import { TodoModel, database } from '@/libs/database'

export class WatermelonTodoRepository implements TodoRepository {
  private collection() {
    return database.get<TodoModel>('todos')
  }

  async create(todo: TodoCreate) {
    return await database.write(async () => {
      await this.collection().create((data) => {
        data.description = todo.description
        data.completed = todo.completed
      })
    })
  }

  async update(todo: TodoUpdate) {
    return await database.write(async () => {
      const todoModel = await this.collection().find(todo.id)
      await todoModel.update((data) => {
        data.description = todo.description ?? data.description
        data.completed = todo.completed ?? data.completed
      })
    })
  }

  async delete(id: string) {
    return await database.write(async () => {
      const todoModel = await this.collection().find(id)
      await todoModel.destroyPermanently()
    })
  }
}
