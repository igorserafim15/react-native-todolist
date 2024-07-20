import { Providers } from '@/ui/providers'
import { Home } from '@/ui/screens/home'
import { StatusBar } from 'expo-status-bar'
import React from 'react'

export default function App() {
  return (
    <Providers>
      <StatusBar translucent style="light" />
      <Home />
    </Providers>
  )
}
