import { Box } from '@/ui/components/box'
import { Text } from '@/ui/components/text'
import { useState } from 'react'

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
  const [counts] = useState({ allCount: 0, completedCount: 0 })

  return (
    <Box variant="horizontal" justifyContent="space-between">
      <Box variant="horizontal" gap="$1">
        <Text fontSize={14} color="accent500" fontWeight="bold">
          Criadas
        </Text>
        <Badge count={counts.allCount} />
      </Box>

      <Box variant="horizontal" gap="$1">
        <Text fontSize={14} color="accent500" fontWeight="bold">
          Concluídos
        </Text>
        <Badge count={counts.completedCount} />
      </Box>
    </Box>
  )
}
