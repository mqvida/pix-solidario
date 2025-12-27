import '../styles/globals.css'

export const metadata = {
  title: 'Pix Solidário',
  description: 'Ação social transparente'
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}