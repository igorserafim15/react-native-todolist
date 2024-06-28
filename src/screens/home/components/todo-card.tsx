import { Todo } from '@/@types'
import { Box } from '@/components/box'
import { Button } from '@/components/button'
import { Checkbox } from '@/components/checkbox'
import { Text } from '@/components/text'
import { colors } from '@/theme/colors'
import { Trash } from 'phosphor-react-native'

type Props = {
  todo: Todo
}

export function TodoCard({ todo }: Props) {
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
      <Checkbox checked={todo.completed} onChecked={() => {}} />

      <Text color="neutral200" style={{ flex: 1 }}>
        {todo.description}
      </Text>

      <Button variant="iconSmall">
        <Trash color={colors.neutral300} />
      </Button>
    </Box>
  )
}
