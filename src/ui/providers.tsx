/* eslint-disable camelcase */
import { ThemeProvider } from '@shopify/restyle'
import { theme } from './theme'
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from '@expo-google-fonts/inter'
import { SplashScreen } from './screens/splash-screen'

type ProvidersProps = { children: React.ReactNode }

export function Providers({ children }: ProvidersProps) {
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_700Bold })

  return (
    <ThemeProvider theme={theme}>
      {!fontsLoaded && <SplashScreen />}
      {fontsLoaded && children}
    </ThemeProvider>
  )
}
