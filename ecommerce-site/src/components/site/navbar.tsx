import React, { useContext } from 'react';
import Link from 'next/link';
import { Box, Button } from '@mui/material';
import styles from './navbar.module.css';
import { AuthContext } from '../AuthContext';

const Navbar = () => {
  const context = useContext(AuthContext);

  const clearToken = () => {
    context.setTokenContext('');
  };

  return (
    <Box>
      <Link href="/login">Login</Link>
      <Link href="/register">Sign Up</Link>
      <Button onClick={clearToken} className={styles.button}>
        Log Out
      </Button>
    </Box>
  );
};

export default Navbar;
