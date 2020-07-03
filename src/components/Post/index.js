import Link from 'next/link';
import { MdBookmarkBorder } from 'react-icons/md';

import { Container } from './styles';

function PostContainer({ data }) {
  return (
    <Link href='/post/[id]' as={`/post/${data.id}`}>
      <Container>
        <span>{data.date}</span>
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        <footer>
          <MdBookmarkBorder size={18} />
          {data.tags}
        </footer>
      </Container>
    </Link>
  );
}

export default PostContainer;
