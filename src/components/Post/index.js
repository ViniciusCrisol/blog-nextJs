import { MdBookmarkBorder } from 'react-icons/md';
import { Container } from './styles';

function Post() {
  return (
    <Container>
      <span>19 mai, 2020</span>
      <h1>quis nostrud exercitation ullamco</h1>
      <p>
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem it is pleasure, but because those who do not know how to
        pursue pleasure.
      </p>
      <footer>
        <MdBookmarkBorder size={18} />
        <span>CSS, HTML</span>
      </footer>
    </Container>
  );
}

export default Post;
