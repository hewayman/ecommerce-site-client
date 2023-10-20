'use client';

import Hero from '@/components/home/hero';
import Navbar from '@/components/site/navbar';
import { useEffect, useState } from 'react';
// import styles from './page.module.css';

const Home = () => {
  const [sessionToken, setSessionToken] = useState<string>('');

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setSessionToken(localStorage.getItem('token') as string);
    }
  }, []);

  const updateToken = (newToken: string) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log('sessionToken', sessionToken);
  };

  return (
    <main>
      <Navbar />
      <Hero />
    </main>
  );
};

export default Home;
