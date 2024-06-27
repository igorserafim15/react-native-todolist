import { createTheme } from '@shopify/restyle'
import { colors } from './colors'
import { spacing } from './spacing'
import { textVariants } from './textVariants'
import { buttonVariants } from './buttonVariants'

export const theme = createTheme({
  colors,
  spacing,
  textVariants,
  buttonVariants,
  boxVariants: {},
  inputVariants: {},
})

export type Theme = typeof theme
