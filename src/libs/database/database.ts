import { Database } from '@nozbe/watermelondb'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'
import { schemas } from './schemas'
import { migrations } from './migrations'
import { TodoModel } from './models'

const adapter = new SQLiteAdapter({
  schema: schemas,
  migrations,
})

export const database = new Database({
  adapter,
  modelClasses: [TodoModel],
})
