import React from 'react';

import { Container } from './styles';

export function BottomContent(): JSX.Element {
  return (
    <Container>
      <span>
        👨‍💻 by{' '}
        <a
          href="https://github.com/r0drigobenicio"
          target="_blank"
          rel="noreferrer"
        >
          r0drigobenicio
        </a>
        .
      </span>
    </Container>
  );
}
