import type { AppProps } from 'next/app';
export default function MyApp({ Component, pageProps, router }: AppProps) {

  return (
    <>
        <Component {...pageProps} key={router.pathname} />
        <style global jsx>{`
          *, *::before, *::after{
              margin: 0;
              padding: 0;
              box-sizing: border-box;
          }
        `}</style>
    </>
  ) 
}