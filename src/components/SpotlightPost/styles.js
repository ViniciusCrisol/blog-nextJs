import styled from 'styled-components';

export const Container = styled.div`
  max-width: 343px;
  max-height: 255px;

  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  padding: 18px;
  margin: 6px;

  cursor: pointer;

  > span {
    color: var(--gray);
  }

  h1 {
    font-size: 22px;
    margin: 6px 0;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  p {
    height: 95px;
    text-overflow: none;
    overflow: hidden;
  }

  footer {
    margin-top: 12px;

    display: flex;
    align-items: center;

    svg {
      margin-right: 6px;
    }
  }

  transition: 200ms;

  :hover {
    box-shadow: 0px 0px 5px var(--main-opacity);
    transform: scale(1.02);
  }
`;
