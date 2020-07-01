import { FiBookmark } from 'react-icons/fi';
import Link from 'next/link';

import { Container } from './styles';

function SpotlightPost() {
  return (
    <Link href='/post'>
      <Container>
        <span>19 mai, 2020</span>
        <h1>quis nostrud exercitation ullamco</h1>
        <p>
          odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
          voluptatem it is pleasure, but because those who do not know how to
          pursue pleasure rationally encounter consequences that are extremely
          painful.
        </p>
        <footer>
          <FiBookmark size={18} />
          <span>CSS, HTML</span>
        </footer>
      </Container>
    </Link>
  );
}

export default SpotlightPost;
