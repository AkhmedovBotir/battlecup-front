import './globals.css'

export const metadata = {
  title: 'Battle Cup',
  description: 'Battle Cup - Dota 2 Tournament Platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body 
        className="min-h-screen bg-background text-white antialiased" 
        style={{
          backgroundImage: "url('/img/login_bg.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        <div className='min-h-screen bg-[#0B0D10CC]'>
          {children}
        </div>
      </body>
    </html>
  )
}
