import { Box } from '@/components/box'
import Logo from '@/assets/logo.svg'
import { Text } from '@/components/text'

export function Home() {
  return (
    <Box backgroundColor="mainBackground" flexGrow={1}>
      <Box
        backgroundColor="headerBackground"
        justifyContent="center"
        alignItems="center"
        height={200}
      >
        <Logo />
      </Box>

      <Box padding="lg">
        <Box variant="horizontal" justifyContent="space-between">
          <Text fontSize={14} color="accentPrimary" fontWeight="bold">
            Criadas
          </Text>
          <Text fontSize={14} color="accentPrimary" fontWeight="bold">
            Concluídas
          </Text>
        </Box>
      </Box>
    </Box>
  )
}
