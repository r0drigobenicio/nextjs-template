import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
  gap: 20px;

  > svg {
    width: 100px;
    height: 100px;
  }
`;
