import Image from 'next/image'
import { Inter } from 'next/font/google'
import MainLayout from '../components/layouts/main.layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={``}
    >
     <MainLayout/>
    </main>
  )
}
