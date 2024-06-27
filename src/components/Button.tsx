import { Theme } from '@/theme'
import {
  VariantProps,
  createRestyleComponent,
  createVariant,
} from '@shopify/restyle'
import { Pressable } from 'react-native'
import { Text } from './text'

const variants = createVariant<Theme, 'buttonVariants'>({
  themeKey: 'buttonVariants',
})

type ButtonProps = VariantProps<Theme, 'buttonVariants'> &
  React.ComponentProps<typeof Pressable> & { children: React.ReactNode }

const ButtonComponent = createRestyleComponent<ButtonProps, Theme>(
  [variants],
  Pressable,
)

export function Button({ children, ...props }: ButtonProps) {
  return (
    <ButtonComponent {...props}>
      <Text variant="header">{children}</Text>
    </ButtonComponent>
  )
}
