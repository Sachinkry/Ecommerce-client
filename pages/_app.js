import '@/styles/globals.css'
import {Ubuntu} from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { CartProvider } from '@/components/cart/CartContext'

const ubuntu = Ubuntu({
  weight: ['400'],
  subsets: ['latin']

})

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <CartProvider>
      <main className={ubuntu.className}>
        <Component {...pageProps} />
      </main>
      </CartProvider>
    </ThemeProvider>
  )
}
