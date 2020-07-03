import styled from 'styled-components';

export const Container = styled.div`
  p {
    font-size: 20px;
    text-align: justify;
    color: var(--gray);
  }

  h2 {
    margin: 32px 0 6px 0;
  }

  strong {
    color: var(--gray);
    font-weight: normal;
  }

  a {
    color: var(--main);
  }

  ul {
    font-size: 17px;

    li {
      list-style: none;

      & + li {
        margin-top: 4px;
      }
    }
  }
`;
