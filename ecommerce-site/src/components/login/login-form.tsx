'use client';

import { FormEvent, useState } from 'react';
import { Button, TextField } from '@mui/material';
import styles from './login-form.module.css';

const LoginForm = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(email, password);
  };

  return (
    <div className={styles.container}>
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
