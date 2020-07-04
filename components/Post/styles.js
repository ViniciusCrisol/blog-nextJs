import styled from 'styled-components';

export const Container = styled.div`
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  padding: 18px;
  margin: 15px 12px;

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
    font-size: 16px;
  }

  footer {
    margin-top: 12px;

    display: flex;
    align-items: center;

    span {
      text-transform: uppercase;

      & + span {
        margin-left: 6px;
      }
    }

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
