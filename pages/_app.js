import {Provider} from 'next-auth/client'
import AbilityProvider from '../components/AbilityProvider';

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <AbilityProvider>
        <Component {...pageProps} />
      </AbilityProvider>
    </Provider>
  )
}
