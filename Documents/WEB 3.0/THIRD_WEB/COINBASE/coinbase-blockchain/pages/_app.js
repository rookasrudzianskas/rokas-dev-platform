import '../styles/globals.css';
import {ThirdwebProvider} from "@3rdweb/react";
import React from 'react';
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil';

const supportedChainIds = [4];
const connectors = {
  injected: {},
}

function MyApp({ Component, pageProps }) {
  return (
      <RecoilRoot>
          <ThirdwebProvider supportedChainIds={supportedChainIds} connectors={connectors}>
            <Component {...pageProps} />
          </ThirdwebProvider>
      </RecoilRoot>
      )


}

export default MyApp
