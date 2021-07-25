import React from 'react';

import { TypeScriptLogo } from '../../assets/TypeScriptLogo';
import { EslintLogo } from '../../assets/EslintLogo';
import { PrettierLogo } from '../../assets/PrettierLogo';
import { EditorConfigLogo } from '../../assets/EditorConfigLogo';
import { StyledComponentsLogo } from '../../assets/StyledComponentsLogo';
import { PackageLogo } from '../../assets/PackageLogo';

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

        <hr />

        <GridItem>
          <EslintLogo />

          <span>ESLint</span>
        </GridItem>

        <hr />

        <GridItem>
          <PrettierLogo />

          <span>Prettier</span>
        </GridItem>

        <GridItem>
          <EditorConfigLogo />

          <span>EditorConfig</span>
        </GridItem>

        <hr />

        <GridItem>
          <StyledComponentsLogo />

          <span>Styled-Components</span>
        </GridItem>

        <hr />

        <GridItem>
          <PackageLogo />

          <span>Next-Images</span>
        </GridItem>
      </GridWrapper>
    </Container>
  );
}
