import AuthProvider from "../utils/AuthProvider";
import 'tailwindcss/tailwind.css';
import Layout from '../layouts/layout';

import { SWRConfig } from 'swr';
import axios from 'axios';

const fetcher = url => axios.get(url).then(res => res.data);

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    
      <SWRConfig value={{ fetcher }}>
        
        <AuthProvider>
        <body className='bg-gray-100'>
          <Layout>
           
            <Component {...pageProps} />
          
          </Layout>
          </body>
          </AuthProvider>
        
      </SWRConfig>
      
   
  );
}

export default MyApp;
