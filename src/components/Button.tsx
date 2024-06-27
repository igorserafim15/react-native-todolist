import { Theme } from '@/theme'
import {
  VariantProps,
  createRestyleComponent,
  createVariant,
} from '@shopify/restyle'
import { Pressable } from 'react-native'

const variants = createVariant<Theme, 'buttonVariants'>({
  themeKey: 'buttonVariants',
})

type ButtonProps = VariantProps<Theme, 'buttonVariants'> &
  React.ComponentProps<typeof Pressable> & { children: React.ReactNode }

const ButtonComponent = createRestyleComponent<ButtonProps, Theme>(
  [variants],
  Pressable,
)

function Button({ children, ...props }: ButtonProps) {
  return <ButtonComponent {...props}>{children}</ButtonComponent>
}

export { Button, type ButtonProps }
