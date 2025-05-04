'use client'

import { ChakraProvider as ChakraUI, defaultSystem } from '@chakra-ui/react'
import { ThemeProvider } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ChakraProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  if (!loaded) return null

  return (
    <ChakraUI value={defaultSystem}>
      <ThemeProvider attribute='class' disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </ChakraUI>
  )
}
