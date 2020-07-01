import Layout from '../src/layout';

import Spotlight from '../src/components/Spotlight';
import Tags from '../src/components/Tags';
import NavigateButton from '../src/components/NavigateButton';

function Home() {
  return (
    <Layout>
      <Spotlight />
      <Tags />
      <NavigateButton />
    </Layout>
  );
}

export default Home;
