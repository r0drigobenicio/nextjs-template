import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 5rem;

  > p {
    font-size: 2rem;
    font-weight: 500;
    color: var(--secondary-gray-color);
  }
`;

export const GridWrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 100fr 1fr 100fr 1fr 100fr;

  grid-gap: 3.5rem 2rem;

  > hr {
    width: 0.05rem;
    height: 5rem;

    background: var(--border-color);
  }
`;

export const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1.6rem;

  > svg {
    width: 5rem;
    height: 5rem;
  }

  > span {
    font-size: 1.6rem;
    font-weight: 400;
    color: var(--primary-gray-color);
    text-align: center;
  }
`;
