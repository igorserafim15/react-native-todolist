import { Box } from '@/components/box'
import Logo from '@/assets/logo.svg'
import { FeedbackBar } from './components/feedback-bar'
import { TodoEmpty } from './components/todo-empty'
import { Todo } from '@/@types'
import { TodoCard } from './components/todo-card'
import { FlatList } from 'react-native'
import { CreateTodo } from './components/create-todo'

const todoList: Todo[] = [
  {
    id: '1e4d9e34-5b21-11eb-ae93-0242ac130002',
    description: 'Comprar mantimentos',
    completed: false,
    createdAt: 1688064000,
  },
  {
    id: '1e4da1a2-5b21-11eb-ae93-0242ac130002',
    description: 'Lavar o carro',
    completed: true,
    createdAt: 1688150400,
  },
  {
    id: '1e4da314-5b21-11eb-ae93-0242ac130002',
    description: 'Estudar para o exame',
    completed: false,
    createdAt: 1688236800,
  },
  {
    id: '1e4da45e-5b21-11eb-ae93-0242ac130002',
    description: 'Reunião com o cliente',
    completed: true,
    createdAt: 1688323200,
  },
  {
    id: '1e4da5c6-5b21-11eb-ae93-0242ac130002',
    description: 'Pagar as contas',
    completed: false,
    createdAt: 1688409600,
  },
  {
    id: '1e4da70c-5b21-11eb-ae93-0242ac130002',
    description: 'Fazer exercícios',
    completed: true,
    createdAt: 1688496000,
  },
  {
    id: '1e4da832-5b21-11eb-ae93-0242ac130002',
    description: 'Organizar o escritório',
    completed: false,
    createdAt: 1688582400,
  },
  {
    id: '1e4da94e-5b21-11eb-ae93-0242ac130002',
    description: 'Enviar o relatório',
    completed: true,
    createdAt: 1688668800,
  },
  {
    id: '1e4daa8e-5b21-11eb-ae93-0242ac130002',
    description: 'Visitar a família',
    completed: false,
    createdAt: 1688755200,
  },
  {
    id: '1e4daba8-5b21-11eb-ae93-0242ac130002',
    description: 'Limpar a casa',
    completed: true,
    createdAt: 1688841600,
  },
]

export function Home() {
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
          data={todoList}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <TodoCard todo={item} />}
        />

        {!todoList.length && <TodoEmpty />}
      </Box>
    </Box>
  )
}
