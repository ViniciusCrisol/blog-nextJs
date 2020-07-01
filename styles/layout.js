import styled, { keyframes } from 'styled-components';

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 750px;

  margin: 0 auto;
  padding: 30px 20px;

  animation: 400ms ${fadeIn};
`;
