import React from 'react';
import Head from 'next/head';

import { TopContent } from '../components/TopContent';
import { CenterContent } from '../components/CenterContent';
import { BottomContent } from '../components/BottomContent';

import { Container, Wrapper } from '../styles/pages/Home';

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Container>
        <Wrapper>
          <TopContent />
          <CenterContent />
        </Wrapper>

        <BottomContent />
      </Container>
    </>
  );
}
