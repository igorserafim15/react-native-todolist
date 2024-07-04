import { Box } from '@/ui/components/box'
import Logo from '@/assets/logo.svg'
import { FeedbackBar } from './components/feedback-bar'
import { TodoEmpty } from './components/todo-empty'
import { TodoCard } from './components/todo-card'
import { FlatList } from 'react-native'
import { CreateTodo } from './components/create-todo'
import { observables, ObservablesProps } from '@/libs/database/observables'
import { TodoModel } from '@/libs/database'

function RawHome({ listing }: ObservablesProps<TodoModel>) {
  return (
    <Box backgroundColor="neutral600" flexGrow={1}>
      <Box
        backgroundColor="neutral700"
        justifyContent="center"
        alignItems="center"
        height={200}
      >
        <Logo />
      </Box>

      <Box
        paddingHorizontal="$6"
        position="relative"
        paddingBottom="$1"
        paddingTop="$14"
        gap="$5"
        flex={1}
      >
        <CreateTodo />
        <FeedbackBar />

        <FlatList
          renderItem={({ item }) => <TodoCard todo={item} />}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<TodoEmpty />}
          data={listing}
        />
      </Box>
    </Box>
  )
}

export const Home = observables<TodoModel>('todos', RawHome)
