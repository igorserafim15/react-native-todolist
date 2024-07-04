import { TodoUpdate } from '@/app/entities/todo'
import { TodoRepository } from '@/app/repositories/todo-repository'

export class UpdateTodoUseCase {
  constructor(private todoRepository: TodoRepository) {}

  async execute(todo: TodoUpdate) {
    return await this.todoRepository.update(todo)
  }
}
