import { Box } from '@/components/box'
import { ActivityIndicator } from 'react-native'

export function SplashScreen() {
  return (
    <Box
      backgroundColor="neutral600"
      justifyContent="center"
      alignItems="center"
      flexGrow={1}
    >
      <ActivityIndicator color="#eee" size="large" />
    </Box>
  )
}
