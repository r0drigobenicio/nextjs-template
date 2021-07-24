import React from 'react';

import { TypeScriptLogo } from '../../assets/TypeScriptLogo';
import { EslintLogo } from '../../assets/EslintLogo';
import { PrettierLogo } from '../../assets/PrettierLogo';
import { EditorConfigLogo } from '../../assets/EditorConfigLogo';
import { StyledComponentsLogo } from '../../assets/StyledComponentsLogo';
import { NpmLogo } from '../../assets/NpmLogo';

import { Container, GridWrapper, GridItem } from './styles';

export function CenterContent(): JSX.Element {
  return (
    <Container>
      <p>This template uses</p>

      <GridWrapper>
        <GridItem>
          <TypeScriptLogo />

          <span>TypeScript</span>
        </GridItem>

        <GridItem>
          <EslintLogo />

          <span>ESLint</span>
        </GridItem>

        <GridItem>
          <PrettierLogo />

          <span>Prettier</span>
        </GridItem>

        <GridItem>
          <EditorConfigLogo />

          <span>EditorConfig</span>
        </GridItem>

        <GridItem>
          <StyledComponentsLogo />

          <span>Styled-Components</span>
        </GridItem>

        <GridItem>
          <NpmLogo />

          <span>Next-Images</span>
        </GridItem>
      </GridWrapper>
    </Container>
  );
}
