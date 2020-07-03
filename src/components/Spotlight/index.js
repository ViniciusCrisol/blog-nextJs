import { Container } from './styles';

import Post from '../SpotlightPost';

function Spotlight({ posts }) {
  return (
    <Container>
      <h1>Fixed Posts</h1>
      <main>
        {posts.map((post) => (
          <Post key={post.id} data={post} />
        ))}
      </main>
    </Container>
  );
}

export default Spotlight;
