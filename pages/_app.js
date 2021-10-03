import { client } from '../lib/apollo'
import { ApolloProvider } from '@apollo/client';

import 'tailwindcss/tailwind.css';
import Layout from '../layouts/layout';



function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Layout>
<Component {...pageProps} />
</Layout>
    </ApolloProvider>
  
  )
}

export default MyApp;
