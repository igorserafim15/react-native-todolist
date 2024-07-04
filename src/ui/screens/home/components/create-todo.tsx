import { Box } from '@/ui/components/box'
import { Button } from '@/ui/components/button'
import { Input } from '@/ui/components/input'
import { PlusCircle } from 'phosphor-react-native'
import { useCreateTodoController } from './create-todo-controller'

export function CreateTodo() {
  const ctrl = useCreateTodoController()

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
      <Input
        placeholder="Adicione uma nova tarefa"
        onChangeText={ctrl.setDescription}
        value={ctrl.description}
      />

      <Button variant="iconMedium" onPress={ctrl.handleCreateTodo}>
        <PlusCircle color="#fff" size={28} />
      </Button>
    </Box>
  )
}
