
import NextAuthProvider from '@/providers/NextAuth';
import './globals.css'
import type { Metadata } from 'next'
import { SessionProvider } from "next-auth/react"
import Header from './components/Header';
import Footer from './components/Footer';


// const inter = Inter({ subsets: ['latin'] })

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
      {/* <body className="bg-mainColor">{children}</body> */}
      {/* <body className={inter.className}>{children}</body> */}
    </html>
  )
}

// export default function RootLayout({
//   children,
//   ...props
// }: {
//   children: React.ReactNode;
// }) {
//   console.log("layout", { props }); // empty
//   return (
//     <html>
//       <head></head>
//       <body>
//         <SessionProvider session={props.session}>{children}</SessionProvider> // session not exists
//       </body>
//     </html>
//   );
// }





