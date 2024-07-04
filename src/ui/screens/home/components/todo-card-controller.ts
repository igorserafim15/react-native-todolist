import { WatermelonTodoRepository } from '@/app/repositories/watermelon/watermelon-todo-repository'
import { DeleteTodoUseCase } from '@/app/use-cases/delete-todo-use-case'
import { UpdateTodoUseCase } from '@/app/use-cases/update-todo-use-case'

export function useTodoCardController(id: string) {
  const todoRepository = new WatermelonTodoRepository()

  const updateTodo = new UpdateTodoUseCase(todoRepository)
  const deleteTodo = new DeleteTodoUseCase(todoRepository)

  async function handleCompleted(completed: boolean) {
    await updateTodo.execute({ id, completed })
  }

  async function handleDelete() {
    await deleteTodo.execute(id)
  }

  return {
    handleCompleted,
    handleDelete,
  }
}
