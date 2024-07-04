import { TodoRepository } from '@/app/repositories/todo-repository'

export class DeleteTodoUseCase {
  constructor(private todoRepository: TodoRepository) {}

  async execute(id: string) {
    return await this.todoRepository.delete(id)
  }
}
