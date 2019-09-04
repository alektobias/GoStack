import React from 'react';
import axios from 'axios';
import Link from 'next/link';
import Head from 'next/head';

const User = ({ users }) => {
  return (
    <div>
      <Head>
        <title>Usuários</title>
      </Head>
      <Link href="/">
        <a>Voltar</a>
      </Link>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.login}
            <Link href={`/users/${user.login}`}>
              <a>Acessar perfil</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
User.getInitialProps = async () => {
  const response = await axios.get('https://api.github.com/orgs/rocketseat/members');
  return { users: response.data }
}
export default User;