'use client';

import Navbar from '@/components/site/navbar';
import useLocalStorage from '@/hooks/useLocalStorage';
import { AuthContext } from '@/components/AuthContext';
// import styles from './page.module.css';

const Home = () => {
  const [tokenContext, setTokenContext] = useLocalStorage('token', '');

  return (
    <AuthContext.Provider value={{ tokenContext, setTokenContext }}>
      <main>
        <Navbar />
        hi
      </main>
    </AuthContext.Provider>
  );
};

export default Home;
