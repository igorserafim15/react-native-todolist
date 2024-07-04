import { Todo, TodoCreate, TodoUpdate } from '@/app/entities/todo'
import { TodoRepository } from '../todo-repository'
import { randomUUID } from 'node:crypto'
import { getUnixTime } from 'date-fns'

export class InMemoryTodoRepository implements TodoRepository {
  private todos: Todo[] = []

  async create(todo: TodoCreate) {
    this.todos.push({
      id: randomUUID(),
      description: todo.description,
      completed: todo.completed,
      createdAt: getUnixTime(new Date()),
    })
  }

  async update(todo: TodoUpdate) {
    this.todos = this.todos.map((item) => {
      if (item.id === todo.id) {
        return { ...item, ...todo }
      }
      return item
    })
  }

  async delete(id: string) {
    this.todos = this.todos.filter((todo) => todo.id !== id)
  }
}
