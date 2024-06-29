import { appSchema } from '@nozbe/watermelondb'
import { todosSchema } from './todos-schema'

const schemas = appSchema({
  version: 1,
  tables: [todosSchema],
})

export { schemas }
