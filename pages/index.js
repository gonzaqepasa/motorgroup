import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/src/Components/Nav/Nav'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between `}
    >



      <Header />


    </main>
  )
}
