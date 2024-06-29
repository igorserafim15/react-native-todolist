import { database } from '../index'
import { withObservables } from '@nozbe/watermelondb/react'
import { TodoModel } from '../models/todos-model'

type ObservablesTodoProps = {
  todosList: TodoModel[]
}

type ComponentObservables = (props: ObservablesTodoProps) => React.JSX.Element

function observablesTodos(component: ComponentObservables) {
  const TodosList = database.collections.get<TodoModel>('todos').query()
  const observables = withObservables([], () => ({
    todosList: TodosList.observe(),
  }))

  return observables(component)
}

export { observablesTodos, type ObservablesTodoProps }
