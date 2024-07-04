import { EntityUpdate, Optional } from './utils'

export type Todo = {
  id: string
  description: string
  completed: boolean
  createdAt: number
}

export type TodoCreate = Optional<Todo, 'id' | 'createdAt'>

export type TodoUpdate = EntityUpdate<Todo>
