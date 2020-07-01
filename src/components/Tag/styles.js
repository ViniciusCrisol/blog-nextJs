import styled from 'styled-components';

export const Container = styled.div`
  height: 42px;
  min-width: 90px;
  width: min-content;

  padding: 6px 12px 6px 6px;
  margin: 6px;

  border-radius: 26px;
  background: var(--light-gray);

  display: flex;
  align-items: center;

  cursor: pointer;

  div {
    width: 30px;
    height: 30px;

    border-radius: 50%;
    background: var(--dark);

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      color: var(--white);
    }
  }

  span {
    margin-left: 8px;

    color: var(--gray);
    font-weight: bold;
    font-size: 18px;
  }
`;
