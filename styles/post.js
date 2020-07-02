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
    margin: 16px 0;
  }
`;
