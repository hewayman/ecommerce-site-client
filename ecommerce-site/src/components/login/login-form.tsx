'use client';

import { FormEvent, useState } from 'react';
import { Button, TextField } from '@mui/material';
import APIURL from '@/helpers/environment';
import useLocalStorage from '@/hooks/useLocalStorage';
import styles from './login-form.module.css';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [sessionToken, setSessionToken] = useLocalStorage('token', '');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const url = `${APIURL}/user/login`;
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
        setSessionToken(data.sessionToken);
        router.push('/');
      });
  };

  return (
    <div className={styles.container}>
      Login
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
        {/* <Grid container justify="flex-end">
                <Grid item>
                  <Link href="/user/register" variant="body2" style={{ fontFamily:'Montserrat', fontWeight: 900, textDecoration:'none' }}>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid> */}
      </form>
    </div>
  );
};

export default LoginForm;
