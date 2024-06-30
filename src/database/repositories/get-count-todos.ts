import { Q } from '@nozbe/watermelondb'
import { database } from '../index'
import { TodoModel } from '../models/todos-model'

async function getCountTodos() {
  const collection = database.get<TodoModel>('todos')

  const allCount = await collection.query().count
  const completedCount = await collection.query(Q.where('completed', true))
    .count

  return { allCount, completedCount }
}

export { getCountTodos }
