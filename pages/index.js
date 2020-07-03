import Layout from '../src/layout';
import api from '../src/services/api';
import Spotlight from '../src/components/Spotlight';
import NavigateButton from '../src/components/NavigateButton';

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
      <Spotlight posts={posts} />
      <NavigateButton />
    </Layout>
  );
}

export default Home;
