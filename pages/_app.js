import 'tailwindcss/tailwind.css';
import Layout from '../layouts/layout';
import { SessionProvider } from 'next-auth/react';
import { SWRConfig } from 'swr';
import axios from 'axios';

const fetcher = url => axios.get(url).then(res => res.data);

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <SWRConfig value={{ fetcher }}>
        <body className='bg-gray-100'>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </body>
      </SWRConfig>
    </SessionProvider>
  );
}

export default MyApp;
