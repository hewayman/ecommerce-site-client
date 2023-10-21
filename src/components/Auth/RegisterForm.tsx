'use client';

import { FormEvent, useContext, useState } from 'react';
import { Button, TextField } from '@mui/material';
import APIURL from '@/helpers/environment';
import styles from './RegisterForm.module.css';
import { useRouter } from 'next/navigation';
import { AuthContext } from '../AuthContext';

const LoginForm = () => {
  const context = useContext(AuthContext);
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const url = `${APIURL}/user/register`;
    const body = {
      email: email,
      password: password,
    };

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        context.setTokenContext(data.sessionToken);
        context.setUserIdContext(data.user.id);
      })
      .then(() => router.push('/'));
  };

  return (
    <div className={styles.container}>
      Sign Up
      <form onSubmit={handleSubmit} className={styles.form} noValidate>
        <TextField
          margin="normal"
          required
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          className={styles.button}
        >
          Sign In
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
