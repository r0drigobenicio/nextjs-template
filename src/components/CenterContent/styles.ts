import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 4rem;

  > p {
    font-size: 2rem;
    font-weight: 500;
    color: var(--secondary-gray-color);
  }
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  grid-gap: 3rem;
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
  }
`;
