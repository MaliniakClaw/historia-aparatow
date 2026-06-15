import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Historia Aparatów Fotograficznych — Od Ciemni Optycznej do Cyfrowej Rewolucji',
  description: 'Podróż przez ponad tysiąc lat historii fotografii. Od pierwszych eksperymentów z camera obscura, przez rewolucję dagerotypii, aż po współczesne aparaty bezlusterkowe.',
  keywords: 'historia fotografii, aparaty fotograficzne, camera obscura, dagerotypia, Kodak, Leica, fotografia cyfrowa',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  )
}