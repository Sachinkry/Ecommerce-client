import '@/styles/globals.css'
import {Ubuntu} from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { CartProvider } from '@/contexts/CartContext'
import { UserProvider } from '@/contexts/UserContext'

const ubuntu = Ubuntu({
  weight: ['400'],
  subsets: ['latin']

})

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <UserProvider>
      <CartProvider>
      <main className={ubuntu.className}>
        <Component {...pageProps} />
      </main>
      </CartProvider>
      </UserProvider>
    </ThemeProvider>
  )
}
