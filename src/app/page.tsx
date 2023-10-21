'use client';

import { AuthContext } from '@/components/AuthContext';
import {
  CurrentUserContext,
  CurrentUserProvider,
} from '@/components/CurrentUserContext';
import Navbar from '@/components/Navbar/Navbar';
// import { UserContext } from '@/components/UserContext';
import useLocalStorage from '@/hooks/useLocalStorage';
// import styles from './page.module.css';

const Home = () => {
  const [tokenContext, setTokenContext] = useLocalStorage('token', '');
  const [userIdContext, setUserIdContext] = useLocalStorage('user', '');

  return (
    <AuthContext.Provider
      value={{ tokenContext, setTokenContext, userIdContext, setUserIdContext }}
    >
      {/* <UserContext.Provider value={{}} > */}
      <CurrentUserProvider>
        <main>
          <Navbar />
          hi
        </main>
      </CurrentUserProvider>
      {/* </UserContext.Provider> */}
    </AuthContext.Provider>
  );
};

export default Home;
