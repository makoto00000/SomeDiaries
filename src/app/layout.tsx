import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Some Diaries',
  description: 'どこかのだれかと交換日記',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className="bg-mainColor">{children}</body>
      {/* <body className={inter.className}>{children}</body> */}
    </html>
  )
}
