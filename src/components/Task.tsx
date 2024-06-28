import { Theme } from '@/theme'
import { createBox } from '@shopify/restyle'

const TaskBox = createBox<Theme>()

type TaskProps = React.ComponentProps<typeof TaskBox>

function Task(props: TaskProps) {
  return <TaskBox flexDirection="row" gap="sm" {...props} />
}

export { Task, type TaskProps }
