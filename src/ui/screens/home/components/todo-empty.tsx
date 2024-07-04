import { Box } from '@/ui/components/box'
import { Text } from '@/ui/components/text'
import Clipboard from '@/assets/clipboard.svg'

export function TodoEmpty() {
  return (
    <Box
      borderTopColor="neutral400"
      justifyContent="center"
      borderTopWidth={1.5}
      alignItems="center"
      height={240}
    >
      <Clipboard />
      <Text color="neutral300" fontWeight="bold" paddingTop="$4" fontSize={16}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text color="neutral300">Crie tarefas e organize seus itens a fazer</Text>
    </Box>
  )
}
