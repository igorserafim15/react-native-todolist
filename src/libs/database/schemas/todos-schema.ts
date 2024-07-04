import { tableSchema } from '@nozbe/watermelondb'

export const todosSchema = tableSchema({
  name: 'todos',
  columns: [
    { name: 'description', type: 'string' },
    { name: 'completed', type: 'boolean' },
  ],
})
