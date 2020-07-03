import Layout from '../src/layout';

import api from '../src/services/api';
import PostContainer from '../src/components/Post';

export async function getStaticProps() {
  const response = await api.get('');

  return {
    props: {
      posts: response.data,
    },
  };
}

function Post({ posts }) {
  return (
    <Layout>
      {posts.map((post) => (
        <PostContainer key={post.id} data={post} />
      ))}
    </Layout>
  );
}

export default Post;
