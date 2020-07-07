import Router from 'next/router';
import Head from 'next/head';
import { IoMdArrowBack } from 'react-icons/io';

import api from '../../services/api';
import Layout from '../../components/layout';

import { Container } from '../../styles/post';

export async function getStaticProps({ params }) {
  const response = await api.get(`posts/${params.id}`);

  return {
    props: {
      post: response.data,
    },
  };
}

export async function getStaticPaths() {
  const pageNumber = [];

  for (let i = 1; i <= 2; i++) pageNumber.push(`${i}`);

  return {
    paths: pageNumber.map((number) => ({
      params: {
        id: number,
      },
    })),
    fallback: false,
  };
}

function Post({ post }) {
  return (
    <Layout>
      <Head>
        <title>{post.title}</title>
        <meta
          name='description'
          content={post.description}
          data-react-helmet='true'
        />
      </Head>
      <Container>
        <a onClick={() => Router.back()}>
          <IoMdArrowBack />
          Go Back
        </a>

        <span>{post.date}</span>
        <h1>{post.title}</h1>
        <article dangerouslySetInnerHTML={{ __html: post.text }} />

        <footer>
          <p>
            Vinícius Crisol
            <a
              target='_blank'
              href='https://www.linkedin.com/in/vin%C3%ADciuscrisol/'
            >
              Linkedin
            </a>
            <a target='_blank' href='https://github.com/ViniciusCrisol'>
              Github
            </a>
          </p>
        </footer>
      </Container>
    </Layout>
  );
}

export default Post;
