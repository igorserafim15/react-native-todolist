import { WatermelonTodoRepository } from '@/app/repositories/watermelon/watermelon-todo-repository'
import { CreateTodoUseCase } from '@/app/use-cases/create-todo-use-case'
import { useState } from 'react'

export function useCreateTodoController() {
  const [description, setDescription] = useState('')

  const repository = new WatermelonTodoRepository()
  const createTodo = new CreateTodoUseCase(repository)

  async function handleCreateTodo() {
    await createTodo.execute({
      description,
      completed: false,
    })
    setDescription('')
  }

  return {
    description,
    handleCreateTodo,
    setDescription,
  }
}
