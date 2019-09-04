import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styled from 'styled-components';

const Title = styled.h1`
  color: #069;
  font-size: 40px;
`
const Home = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <img src="/static/panda.jpeg" width="200" />
      <Title>Hello Next.SSR</Title>
      <Link href="/users">
        <a>Usuarios</a>
      </Link>
    </div>
  );
}
export default Home;