import { Box } from '@/components/box'
import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { PlusCircle } from 'phosphor-react-native'

export function CreateTodo() {
  return (
    <Box
      paddingHorizontal="$6"
      variant="horizontal"
      alignItems="center"
      position="absolute"
      top={-27}
      right={0}
      left={0}
      gap="$2"
    >
      <Input placeholder="Adicione uma nova tarefa" />

      <Button variant="iconMedium">
        <PlusCircle color="#fff" size={28} />
      </Button>
    </Box>
  )
}
