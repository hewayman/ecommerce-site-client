import React, { useContext } from 'react';
import Link from 'next/link';
import { Box, Button } from '@mui/material';
import styles from './Navbar.module.css';
import { AuthContext } from '../AuthContext';

const Navbar = () => {
  const context = useContext(AuthContext);

  const clearToken = () => {
    context.setTokenContext('');
  };

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
