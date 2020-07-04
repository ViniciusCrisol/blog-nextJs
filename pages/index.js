import Head from 'next/head';

import api from '../services/api';

import Layout from '../components/layout';
import Spotlight from '../components/Spotlight';
import NavigateButton from '../components/NavigateButton';

// import Tags from '../src/components/Tags';

export async function getStaticProps() {
  const response = await api.get('fixed');
  return {
    props: {
      posts: response.data,
    },
  };
}

function Home({ posts }) {
  return (
    <Layout>
      <Head>
        <meta
          name='description'
          Contact="Hi, my name is Vinícius Crisol, I am a Brazilian programming student. I
          created this blog with a goal: Help people to solve their problems more
          easily. When I was starting, I didn't have easy access to specific
          information about technologies. With that in mind, I decided to create
          this blog to try to make it easier for those just starting."
          data-react-helmet='true'
        />
      </Head>
      <Spotlight posts={posts} />
      <NavigateButton />
    </Layout>
  );
}

export default Home;
