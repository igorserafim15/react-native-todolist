import { Button } from '@/components/button'
import { Text } from '@/components/text'
import { View } from 'react-native'

export function Home() {
  return (
    <View>
      <Text color="accentPrimary">Home</Text>
      <Button variant="outlined">Clique aqui</Button>
    </View>
  )
}
