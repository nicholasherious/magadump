import 'tailwindcss/tailwind.css';
import Layout from '../layouts/layout';
import { SessionProvider } from 'next-auth/react';
import { SWRConfig } from 'swr'
import axios from 'axios'

const fetcher = url => axios.get(url).then(res => res.data)

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
    <SWRConfig value={{ fetcher }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </SWRConfig>
    </SessionProvider>
  );
}

export default MyApp;
