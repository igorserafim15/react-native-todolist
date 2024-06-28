import { Box } from '@/components/box'
import { Text } from '@/components/text'

function Badge(props: { count: number }) {
  return (
    <Box
      backgroundColor="neutral400"
      alignItems="center"
      borderRadius={8}
      height={20}
      width={24}
    >
      <Text fontSize={14} color="neutral200">
        {props.count}
      </Text>
    </Box>
  )
}

export function FeedbackBar() {
  return (
    <Box variant="horizontal" justifyContent="space-between">
      <Box variant="horizontal" gap="$1">
        <Text fontSize={14} color="accent500" fontWeight="bold">
          Criadas
        </Text>
        <Badge count={2} />
      </Box>

      <Box variant="horizontal" gap="$1">
        <Text fontSize={14} color="accent500" fontWeight="bold">
          Concluídos
        </Text>
        <Badge count={2} />
      </Box>
    </Box>
  )
}
