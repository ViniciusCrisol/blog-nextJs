import { MdBookmarkBorder } from 'react-icons/md';

import { Container } from './styles';

function Tag({ title }) {
  return (
    <Container>
      <div>
        <MdBookmarkBorder size={18} />
      </div>
      <span>{title}</span>
    </Container>
  );
}

export default Tag;
