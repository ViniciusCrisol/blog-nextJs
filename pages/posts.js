import Head from 'next/head';

import api from '../services/api';

import Post from '../components/Post';
import Layout from '../components/layout';

export async function getStaticProps() {
  const response = await api.get('');

  return {
    props: {
      posts: response.data,
    },
  };
}

function Posts({ posts }) {
  return (
    <Layout>
      <Head>
        <title>Posts</title>
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
      {posts.map((post) => (
        <Post key={post.id} data={post} />
      ))}
    </Layout>
  );
}

export default Posts;
