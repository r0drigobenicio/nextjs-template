import React from 'react';

import { ChapiscadoresLogo } from '../../assets/ChapiscadoresLogo';

import { Container } from './styles';

export function HelloWorld(): JSX.Element {
  return (
    <Container>
      <h1>Hello, World!</h1>

      <ChapiscadoresLogo />
    </Container>
  );
}
