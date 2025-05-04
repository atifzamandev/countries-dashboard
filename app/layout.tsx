import ChakraProvider from '@/providers/ChakraProvider'
import { ReactQueryProvider } from '@/providers/ReactQueryProvider'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Countries Dashboard',
  description:
    'A dynamic dashboard for visualizing country-specific data with interactive charts, metrics, and comparisons.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <ReactQueryProvider>
          <ChakraProvider>{children}</ChakraProvider>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
