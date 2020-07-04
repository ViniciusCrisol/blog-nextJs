import Head from 'next/head';

import Layout from '../components/layout';
import ContactContainer from '../components/Contact';

function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact</title>
        <meta
          name='description'
          Contact='page, blog history and a little bit about Vinícius Crisol(the blog creator)'
          data-react-helmet='true'
        />
      </Head>
      <ContactContainer />
    </Layout>
  );
}

export default Contact;
