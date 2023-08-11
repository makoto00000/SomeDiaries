'use client'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'

  export default function Home() {

  return (
        <main>
            <Main />
        </main>
  )
}

