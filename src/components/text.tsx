import { Theme } from '@/theme'
import { Text as RNText } from 'react-native'
import {
  VariantProps,
  createRestyleComponent,
  createVariant,
} from '@shopify/restyle'

const variants = createVariant<Theme, 'textVariants'>({
  themeKey: 'textVariants',
})

type TextProps = VariantProps<Theme, 'textVariants'> &
  React.ComponentProps<typeof RNText>

const TextComponent = createRestyleComponent<TextProps, Theme>(
  [variants],
  RNText,
)

export function Text(props: TextProps) {
  return <TextComponent {...props} />
}
