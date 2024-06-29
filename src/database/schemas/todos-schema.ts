import { tableSchema } from '@nozbe/watermelondb'

const todosSchema = tableSchema({
  name: 'todos',
  columns: [
    { name: 'description', type: 'string' },
    { name: 'completed', type: 'boolean' },
  ],
})

export { todosSchema }
