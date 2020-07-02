import Router from 'next/router';
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
  return (
    <Layout>
      <Container>
        <a onClick={() => Router.back()}>
          <IoMdArrowBack />
          Go Back
        </a>

        <span>{post.date}</span>
        <h1>{post.title}</h1>
        <article dangerouslySetInnerHTML={{ __html: post.text }} />
      </Container>
    </Layout>
  );
}

export default Post;
