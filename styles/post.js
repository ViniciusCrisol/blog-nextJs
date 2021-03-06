import styled from 'styled-components';

export const Container = styled.div`
  a {
    font-size: 12px;
    color: var(--main);

    display: flex;
    align-items: center;

    cursor: pointer;

    svg {
      margin-right: 4px;
    }
  }

  span {
    display: flex;
    margin: 32px 0 4px 0;

    font-size: 16px;
    color: var(--gray);
  }

  h1 {
    margin-bottom: 16px;
    font-size: 32px;
  }

  p {
    font-size: 20px;
  }

  h2 {
    margin: 30px 0 10px 0;
  }

  strong {
    background-color: #eee;
    padding: 2px;

    font-weight: normal;
    font-size: 10px;
    font-family: 'Fira Code';
  }

  pre {
    width: 100%;

    background-color: #eee;

    padding: 10px;
    margin: 30px auto;
    border-left: 3px solid var(--main);

    font-size: 10px;
    font-family: 'Fira Code';
  }

  footer {
    margin-top: 90px;

    > p {
      color: var(--gray);
      font-size: 16px;

      a + a {
        margin-top: 2px;
      }
    }
  }
`;
