import { Box } from '@/components/box'
import { Text } from '@/components/text'
import { getCountTodos } from '@/database/repositories/get-count-todos'
import { useEffect, useState } from 'react'

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
  const [counts, setCounts] = useState({ allCount: 0, completedCount: 0 })

  async function load() {
    const countTodos = await getCountTodos()
    setCounts(countTodos)
  }

  useEffect(() => {
    load()
  }, [])

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
