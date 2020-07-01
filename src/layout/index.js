import React from 'react';

import { Container, Content } from '../../styles/layout';

import Header from './Header';

function Layout({ children }) {
  return (
    <Container>
      <Header />

      <Content>{children}</Content>
    </Container>
  );
}

export default Layout;
