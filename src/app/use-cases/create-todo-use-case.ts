import { TodoCreate } from '@/app/entities/todo'
import { TodoRepository } from '@/app/repositories/todo-repository'

export class CreateTodoUseCase {
  constructor(private todoRepository: TodoRepository) {}

  async execute(todo: TodoCreate) {
    return await this.todoRepository.create(todo)
  }
}
