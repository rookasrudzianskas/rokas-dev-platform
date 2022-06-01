import '../styles/globals.css'
import type { AppProps } from 'next/app';
import {ThirdwebWeb3Provider} from '@3rdweb/hooks';
import { useEffect } from 'react';


/**
 * The chain ID 4 represents the Rinkeby network
 * The `injected` connector is a web3 connection method used by Metamask
 */

const supportedChainIds = [4];
const connectors = {
  injected: {},
}

// @ts-ignore
function MyApp({ Component, pageProps }) {
  return (
      <ThirdwebWeb3Provider
          supportedChainIds={supportedChainIds}
          connectors={connectors}
      >
        <Component {...pageProps} />
      </ThirdwebWeb3Provider>
  )
}

export default MyApp
