import './globals.css'

export const metadata = {
  title: 'Battle Cup',
  description: 'Battle Cup - Dota 2 Tournament Platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
