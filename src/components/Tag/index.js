import Link from 'next/link';
import { MdBookmarkBorder } from 'react-icons/md';

import { Container } from './styles';

function Tag({ title }) {
  return (
    <Link href=''>
      <Container>
        <div>
          <MdBookmarkBorder size={18} />
        </div>
        <span>{title}</span>
      </Container>
    </Link>
  );
}

export default Tag;
