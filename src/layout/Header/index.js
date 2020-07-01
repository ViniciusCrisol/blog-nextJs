import Link from 'next/link';
import { Container } from './styles';

function layout() {
  return (
    <Container>
      <main>
        <Link href='/'>
          <h1>Crisol</h1>
        </Link>
        <section>
          <a href=''>contact</a>
        </section>
      </main>
    </Container>
  );
}

export default layout;
