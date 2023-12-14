'use client';

import { AuthContext } from '@/components/AuthContext';
import { CurrentUserProvider } from '@/components/CurrentUserContext';
import Navbar from '@/components/Navbar/Navbar';
import StoreItems from '@/components/StoreItems/StoreItems';
import APIURL from '@/helpers/environment';
import useLocalStorage from '@/hooks/useLocalStorage';
import { StoreItem } from '@/types';
import { useEffect, useState } from 'react';

const Home = () => {
  const [tokenContext, setTokenContext] = useLocalStorage('token', '');
  const [userIdContext, setUserIdContext] = useLocalStorage('user', '');
  const [storeItems, setStoreItems] = useState<StoreItem[]>([]);

  useEffect(() => {
    const url = `${APIURL}/listing`;

    fetch(url, { method: 'GET' })
      .then((res) => res.json())
      .then((data) => {
        setStoreItems(data.listing);
      })
      .catch((error) => {
        // TODO: handle error
      });
  }, []);

  return (
    <AuthContext.Provider
      value={{ tokenContext, setTokenContext, userIdContext, setUserIdContext }}
    >
      <CurrentUserProvider>
        <main>
          <Navbar />
          <StoreItems storeItems={storeItems} />
        </main>
      </CurrentUserProvider>
    </AuthContext.Provider>
  );
};

export default Home;
