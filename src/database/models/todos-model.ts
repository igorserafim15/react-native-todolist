import { Model } from '@nozbe/watermelondb'
import { text, field } from '@nozbe/watermelondb/decorators'

class TodoModel extends Model {
  static table = 'todos'

  @text('description')
  description!: string

  @field('completed')
  completed!: boolean
}

export { TodoModel }
