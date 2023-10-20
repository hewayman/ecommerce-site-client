import React from 'react';
import { Box, Button } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './navbar.module.css';

const Navbar = () => {
  const router = useRouter();

  const handleOnClick = () => {
    router.push('/login');
  };

  return (
    <Box>
      <Button onClick={handleOnClick} className={styles.button}>
        Login
      </Button>
    </Box>
  );
};

export default Navbar;
