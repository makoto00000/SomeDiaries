
import NextAuthProvider from '@/providers/NextAuth';
import './globals.css'
import type { Metadata } from 'next'

import Header from './components/Header';
import Footer from './components/Footer';


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
    <html lang="ja" className='flex justify-center max-w-7xl m-auto'>
      <body className="bg-mainColor text-fontColor min-w-fit">
        <NextAuthProvider>
        <Header />
        {children}
        <Footer />
        </NextAuthProvider>
      </body>
    </html>
  )
}





