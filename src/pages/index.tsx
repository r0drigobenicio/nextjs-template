import React from 'react';
import Head from 'next/head';

import { HelloWorld } from '../components/HelloWorld';

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Início</title>
      </Head>

      <HelloWorld />
    </>
  );
}
