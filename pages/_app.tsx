import type { AppProps } from 'next/app';
import '../scss/styles.scss';
export default function MyApp({ Component, pageProps, router }: AppProps) {

  return (
        <Component {...pageProps} key={router.pathname} />
  ) 
}