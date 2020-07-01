import styled from 'styled-components';

export const Container = styled.a`
  width: 220px;
  height: 48px;

  margin: 48px auto;
  padding: 10px 0;
  background: var(--main);
  border-radius: 4px;

  display: flex;
  align-items: baseline;
  justify-content: center;

  color: var(--white);
  font-size: 20px;

  cursor: pointer;

  transition: filter 200ms;

  &:hover {
    filter: brightness(1.1);
  }
`;
