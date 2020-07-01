import { Container } from './styles';
import Post from '../SpotlightPost';

function Spotlight() {
  return (
    <Container>
      <h1>Trending Posts</h1>
      <main>
        <Post />
        <Post />
        <Post />
        <Post />
      </main>
    </Container>
  );
}

export default Spotlight;
