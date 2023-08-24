import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600','900'] })

export const metadata: Metadata = {
  title: 'Brainstorm AI Chatbot',
  description: 'A chatbot that is powered by OpenAI, Next.js, and Supabase',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body>{children}</body>
    </html>
  )
}
