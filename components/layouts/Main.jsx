import Head from 'next/head';
import React from 'react';
import Header from '../Header';

export default function Main({ children }) {
  return (
    <>
      <Head>
        <link rel='icon' href='/img/favicon.png' />
        <title>Proyecto KUNAN</title>
      </Head>
      <Header />
      {children}
    </>
  );
}
