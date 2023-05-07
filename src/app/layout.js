import './globals.css'

export const metadata = {
  title: 'Purrgrammers Studio\'s Website',
  description: 'A team of solution developers with feline passion.',
}

export default function RootLayout({ children }) {
  // AÑADIR AQUI TODOS LOS CONTENIDOS DE LA PAGINA PRINCIPAL (NO COMPARTIR)
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
