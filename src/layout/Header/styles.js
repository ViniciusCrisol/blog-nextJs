import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 64px;

  background-color: var(--dark);

  main {
    max-width: 980px;
    width: 100%;

    margin: 0 auto;
    padding: 16px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-size: 21px;
      font-weight: normal;
      color: var(--white);
    }

    a {
      font-size: 17px;
      color: var(--white);
      font-weight: 600;
      letter-spacing: 1px;

      border-bottom: 2px solid var(--opacity-gray);
      padding-bottom: 5px;

      transition: border-color 300ms;

      &:hover {
        border-color: var(--main);
      }
    }
  }
`;
