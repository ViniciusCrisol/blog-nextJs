import Link from 'next/link';

import { Container } from './styles';

function NavigateButton() {
  return (
    <Link href=''>
      <Container>Check all posts!</Container>
    </Link>
  );
}

export default NavigateButton;
