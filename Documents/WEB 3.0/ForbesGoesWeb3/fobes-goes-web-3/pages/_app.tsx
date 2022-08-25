import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil';
import { SessionProvider } from 'next-auth/react';

// @ts-ignore
function MyApp({ Component, pageProps: {session, ...pageProps } }) {
  return (
      <SessionProvider>
          <RecoilRoot>
              <Component {...pageProps} />
          </RecoilRoot>
      </SessionProvider>
  )
}

export default MyApp
