import Link from 'next/link';
import { IoMdArrowBack } from 'react-icons/io';

import Layout from '../../src/layout';

import { Container } from '../../styles/post';

function Post() {
  return (
    <Layout>
      <Container>
        <Link href='/posts'>
          <a>
            <IoMdArrowBack />
            Posts
          </a>
        </Link>
        <span>01/07/2020</span>
        <h1>Let's talk about React Hooks?</h1>
        <p>
          Well, React Hooks is a recently featured of ReactJs. Many people don't
          know how to use them, and usually make 'silly' errors that can cause a
          lot of problems in your code. The hook useCallback generally is
          overlooked by developers, but many times but it can save your project.
        </p>
      </Container>
    </Layout>
  );
}

export default Post;
