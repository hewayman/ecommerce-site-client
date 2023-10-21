import React, { useContext, useEffect } from 'react';
import Link from 'next/link';
import { Box, Button } from '@mui/material';
import styles from './Navbar.module.css';
import { AuthContext } from '../AuthContext';
import { useCurrentUser } from '../CurrentUserContext';

const Navbar = () => {
  const context = useContext(AuthContext);
  const { currentUser, fetchCurrentUser } = useCurrentUser();

  const clearToken = () => {
    context.setTokenContext('');
    context.setUserIdContext('');
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  console.log('current user', currentUser);

  return (
    <Box>
      <Link href="/login">
        <Button className={styles.button}>Log In</Button>
      </Link>
      <Link href="/register">
        <Button className={styles.button}>Sign Up</Button>
      </Link>
      <Button onClick={clearToken} className={styles.button}>
        Log Out
      </Button>
    </Box>
  );
};

export default Navbar;
