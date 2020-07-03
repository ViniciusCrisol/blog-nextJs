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
          <Link href='/contact'>
            <a>contact</a>
          </Link>
        </section>
      </main>
    </Container>
  );
}

export default layout;
