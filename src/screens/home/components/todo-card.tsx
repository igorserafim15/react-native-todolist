import { Box } from '@/components/box'
import { Button } from '@/components/button'
import { Checkbox } from '@/components/checkbox'
import { Text } from '@/components/text'
import { TodoModel } from '@/database/models/todos-model'
import { deleteTodo } from '@/database/repositories/delete-todo'
import { updateCompletedTodo } from '@/database/repositories/update-checked-todo'
import { colors } from '@/theme/colors'
import { withObservables } from '@nozbe/watermelondb/react'
import { Trash } from 'phosphor-react-native'

type Props = {
  todo: TodoModel
}

function RawTodoCard({ todo }: Props) {
  async function handleChecked(checked: boolean) {
    await updateCompletedTodo(todo.id, checked)
  }

  async function handleDelete() {
    await deleteTodo(todo.id)
  }

  return (
    <Box
      backgroundColor="neutral500"
      variant="horizontal"
      alignItems="center"
      marginBottom="$2"
      borderRadius={8}
      padding="$3"
      gap="$3"
    >
      <Checkbox checked={todo.completed} onChecked={handleChecked} />

      <Text color="neutral200" style={{ flex: 1 }}>
        {todo.description}
      </Text>

      <Button variant="iconSmall" onPress={handleDelete}>
        <Trash color={colors.neutral300} />
      </Button>
    </Box>
  )
}

export const TodoCard = withObservables(['todo'], ({ todo }) => ({
  todo,
}))(RawTodoCard)
