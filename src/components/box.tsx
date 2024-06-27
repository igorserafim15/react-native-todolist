import { Theme } from '@/theme'
import {
  VariantProps,
  createBox,
  createRestyleComponent,
  createVariant,
} from '@shopify/restyle'

const variants = createVariant<Theme, 'boxVariants'>({
  themeKey: 'boxVariants',
})

const BoxComponent = createBox<Theme>()

type BoxProps = VariantProps<Theme, 'boxVariants'> &
  React.ComponentProps<typeof BoxComponent>

export const Box = createRestyleComponent<BoxProps, Theme>(
  [variants],
  BoxComponent,
)
