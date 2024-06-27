import { Button } from '@/components/button'
import { Checkbox } from '@/components/checkbox'
import { Task } from '@/components/task'
import { Text } from '@/components/text'
import { View } from 'react-native'

export function Home() {
  return (
    <View>
      <Text variant="body">Home</Text>
      <Button variant="outlined">Clique aqui</Button>

      <Task>
        <Checkbox checked onChecked={() => {}} />

        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
          voluptatem!
        </Text>

        <Button>oi</Button>
      </Task>
    </View>
  )
}
