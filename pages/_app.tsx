import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps, router }: AppProps) {

  return (
        <Component {...pageProps} key={router.pathname} />
  ) 
}