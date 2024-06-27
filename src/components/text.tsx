import { Theme } from '@/theme'
import {
  VariantProps,
  createRestyleComponent,
  createText,
  createVariant,
} from '@shopify/restyle'

const variants = createVariant<Theme, 'textVariants'>({
  themeKey: 'textVariants',
})

const TextComponent = createText<Theme>()

type TextProps = VariantProps<Theme, 'textVariants'> &
  React.ComponentProps<typeof TextComponent>

const Text = createRestyleComponent<TextProps, Theme>([variants], TextComponent)

export { Text, type TextProps }
