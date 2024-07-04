import { appSchema } from '@nozbe/watermelondb'
import { todosSchema } from './todos-schema'

export const schemas = appSchema({
  version: 1,
  tables: [todosSchema],
})
