import { Providers } from '@/providers'
import { Home } from '@/screens/home'
import React from 'react'

export default function App() {
  return (
    <Providers>
      <Home />
    </Providers>
  )
}
