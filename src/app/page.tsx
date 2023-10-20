'use client';

import { AuthContext } from '@/components/AuthContext';
import Navbar from '@/components/Navbar/Navbar';
import useLocalStorage from '@/hooks/useLocalStorage';
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
