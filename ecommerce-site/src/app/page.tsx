'use client';

import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';

const Home = () => {
  const router = useRouter();

  const handleOnClick = () => {
    router.push('/listing');
  };

  return (
    <main className={styles.main}>
      <Button onClick={handleOnClick}>text test</Button>
    </main>
  );
};

export default Home;
