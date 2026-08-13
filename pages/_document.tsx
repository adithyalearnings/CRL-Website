import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="/cinematic3d.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script src="/cinematic3d.js" defer />
      </body>
    </Html>
  );
}
