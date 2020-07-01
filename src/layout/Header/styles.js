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
      font-size: 28px;
      font-weight: normal;
      color: var(--white);
      letter-spacing: 2px;

      cursor: pointer;
    }

    section {
      display: flex;
      align-items: center;

      a {
        font-size: 17px;
        color: var(--white);
        font-weight: 600;
        letter-spacing: 0.5px;

        border-bottom: 2px solid var(--opacity-gray);
        padding-bottom: 5px;

        transition: border-color 300ms;

        &:hover {
          border-color: var(--main);
        }
      }
    }
  }
`;
