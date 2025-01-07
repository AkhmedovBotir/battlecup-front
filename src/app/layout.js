import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Battle Cup',
  description: 'Battle Cup - Dota 2 Tournament Platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body 
        className={`min-h-screen bg-background text-white antialiased ${inter.className}`}
        style={{
          backgroundImage: "url('/img/login_bg.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        <div className={`min-h-screen bg-[#0B0D10CC] ${inter.className}`}>
          {children}
        </div>
      </body>
    </html>
  )
}
