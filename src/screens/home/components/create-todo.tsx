import { Box } from '@/components/box'
import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { createTodo } from '@/database/repositories/create-todo'
import { PlusCircle } from 'phosphor-react-native'
import { useState } from 'react'

export function CreateTodo() {
  const [description, setDescription] = useState('')

  async function handleCreateTodo() {
    await createTodo({
      description,
      completed: false,
    })
    setDescription('')
  }

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
        onChangeText={setDescription}
        value={description}
      />

      <Button variant="iconMedium" onPress={handleCreateTodo}>
        <PlusCircle color="#fff" size={28} />
      </Button>
    </Box>
  )
}
