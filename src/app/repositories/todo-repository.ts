import { TodoCreate, TodoUpdate } from '@/app/entities/todo'

export interface TodoRepository {
  create(todo: TodoCreate): Promise<void>

  update(todo: TodoUpdate): Promise<void>

  delete(id: string): Promise<void>
}
