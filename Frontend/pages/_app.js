import '../styles/globals.css';
import Head from 'next/head';
import { Button } from 'antd';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next.js App</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
