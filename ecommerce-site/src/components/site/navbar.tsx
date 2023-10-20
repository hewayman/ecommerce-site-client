import React from 'react';
import { Box, Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import useLocalStorage from '@/hooks/useLocalStorage';
import styles from './navbar.module.css';

const Navbar = () => {
  const router = useRouter();
  const [sessionToken, setSessionToken] = useLocalStorage('token', '');

  const handleOnClick = (route: string) => {
    router.push(route);
  };

  // const clearToken = () => {
  //   setSessionToken(newToken);
  //   console.log(newToken);
  // };

  return (
    <Box>
      <Button onClick={() => handleOnClick('/login')} className={styles.button}>
        Login
      </Button>
      <Button
        onClick={() => handleOnClick('/register')}
        className={styles.button}
      >
        Sign Up
      </Button>
      <Button
        // onClick={clearToken}
        className={styles.button}
      >
        Log Out
      </Button>
    </Box>
  );
};

export default Navbar;
