import '../styles/globals.css';

function MyApp(props: any) {
  const Page = props.Component;
  return <Page {...props.pageProps} />;
}

export default MyApp;
