import Link from 'next/link';
import axios from 'axios';
import { IoMdArrowBack } from 'react-icons/io';

import Layout from '../../src/layout';

import { Container } from '../../styles/post';

export async function getStaticProps({ params }) {
  const response = await axios.get(`http://localhost:3333/posts/${params.id}`);
  return {
    props: {
      post: response.data,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          id: '1',
        },
      },
      {
        params: {
          id: '2',
        },
      },
    ],
    fallback: false,
  };
}

function Post({ post }) {
  console.log(post);

  return (
    <Layout>
      <Container>
        <Link href='/posts'>
          <a>
            <IoMdArrowBack />
            Posts
          </a>
        </Link>
        <span>{post.date}</span>
        <h1>{post.title}</h1>
        <p>{post.text}</p>
      </Container>
    </Layout>
  );
}

export default Post;
