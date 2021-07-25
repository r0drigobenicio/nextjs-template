import styled from 'styled-components';

export const Container = styled.div`
  margin: 2rem 0;

  > span {
    font-size: 1.8rem;
    font-weight: 500;
    color: var(--black-color);

    > a {
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
