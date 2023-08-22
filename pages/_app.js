import '@/styles/globals.css'
import {Ubuntu} from 'next/font/google'
import { ThemeProvider } from 'next-themes'

const ubuntu = Ubuntu({
  weight: ['400'],
  subsets: ['latin']

})

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <main className={ubuntu.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  )
}
