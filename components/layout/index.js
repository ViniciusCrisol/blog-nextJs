import React from 'react';
import { initGA, logPageView } from '../../utils/analytics';

import { Container, Content } from '../../styles/layout';

import Header from './Header';

export default class Layout extends React.Component {
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }
  render() {
    return (
      <Container>
        <Header />

        <Content>{this.props.children}</Content>
      </Container>
    );
  }
}
