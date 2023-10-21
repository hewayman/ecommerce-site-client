'use client';

import { AuthContext } from '@/components/AuthContext';
import { CurrentUserProvider } from '@/components/CurrentUserContext';
import Navbar from '@/components/Navbar/Navbar';
import useLocalStorage from '@/hooks/useLocalStorage';

const Home = () => {
  const [tokenContext, setTokenContext] = useLocalStorage('token', '');
  const [userIdContext, setUserIdContext] = useLocalStorage('user', '');

  return (
    <AuthContext.Provider
      value={{ tokenContext, setTokenContext, userIdContext, setUserIdContext }}
    >
      <CurrentUserProvider>
        <main>
          <Navbar />
          hi
        </main>
      </CurrentUserProvider>
    </AuthContext.Provider>
  );
};

export default Home;
