import { Box } from '@/ui/components/box'
import { Button } from '@/ui/components/button'
import { Checkbox } from '@/ui/components/checkbox'
import { Text } from '@/ui/components/text'
import { TodoModel } from '@/libs/database/models/todos-model'
import { colors } from '@/ui/theme/colors'
import { withObservables } from '@nozbe/watermelondb/react'
import { Trash } from 'phosphor-react-native'
import { useTodoCardController } from './todo-card-controller'

type Props = {
  todo: TodoModel
}

function RawTodoCard({ todo }: Props) {
  const ctrl = useTodoCardController(todo.id)

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
      <Checkbox checked={todo.completed} onChecked={ctrl.handleCompleted} />

      <Text color="neutral200" style={{ flex: 1 }}>
        {todo.description}
      </Text>

      <Button variant="iconSmall" onPress={ctrl.handleDelete}>
        <Trash color={colors.neutral300} />
      </Button>
    </Box>
  )
}

export const TodoCard = withObservables(['todo'], ({ todo }) => ({
  todo,
}))(RawTodoCard)
