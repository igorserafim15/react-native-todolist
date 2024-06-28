import { Theme } from '@/theme'
import {
  VariantProps,
  createBox,
  createRestyleComponent,
  createVariant,
} from '@shopify/restyle'
import { Pressable, TextInput } from 'react-native'

const variants = createVariant<Theme, 'inputVariants'>({
  themeKey: 'inputVariants',
})

type InputProps = VariantProps<Theme, 'inputVariants'> &
  React.ComponentProps<typeof Pressable>

const InputComponent = createRestyleComponent<InputProps, Theme>(
  [variants],
  TextInput,
)

const InputBox = createBox<Theme>()

function Input(props: InputProps) {
  return (
    <InputBox>
      <InputComponent {...props} />
    </InputBox>
  )
}

export { Input, type InputProps }
