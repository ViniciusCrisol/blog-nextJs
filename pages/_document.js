import Document, { Head, Main, Html, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import Global from '../styles/global';

class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    );

    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  render() {
    return (
      <Html>
        <Head>
          <style>{this.props.styleTags}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
