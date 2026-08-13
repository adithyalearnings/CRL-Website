import Head from 'next/head';
import '../styles/globals.css';
import '../styles/mobile-fix.css';

function MyApp(props: any) {
  const Page = props.Component;
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </Head>
      <Page {...props.pageProps} />
    </>
  );
}

export default MyApp;
