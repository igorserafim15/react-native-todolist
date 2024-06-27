/* eslint-disable camelcase */
import { ThemeProvider } from '@shopify/restyle'
import { theme } from './theme'
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from '@expo-google-fonts/inter'
import { View } from 'react-native'

type ProvidersProps = { children: React.ReactNode }

export function Providers({ children }: ProvidersProps) {
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_700Bold })

  if (!fontsLoaded) return <View />

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
