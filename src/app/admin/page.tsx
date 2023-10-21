'use client';

import AdminDashboard from '@/components/Auth/AdminDashboard';
import { AuthContext } from '@/components/AuthContext';
import {
  CurrentUserProvider,
  useCurrentUser,
} from '@/components/CurrentUserContext';
// import { UserContext } from '@/components/UserContext';
import APIURL from '@/helpers/environment';
import useLocalStorage from '@/hooks/useLocalStorage';
import { useEffect } from 'react';

const Admin = () => {
  const [tokenContext, setTokenContext] = useLocalStorage('token', '');
  const [userIdContext, setUserIdContext] = useLocalStorage('user', '');

  return (
    <AuthContext.Provider
      value={{ tokenContext, setTokenContext, userIdContext, setUserIdContext }}
    >
      <CurrentUserProvider>
        {/* <UserContext.Provider
        value={{
          emailContext,
          setEmailContext,
          // firstNameContext: [firstName, setFirstName],
          // lastNameContext: [lastName, setLastName],
          // adminContext: [isAdmin, setIsAdmin],
          // firstName,
          // setFirstName,
          // email,
          // setEmail,
        }}
      > */}
        <AdminDashboard />
        {/* </UserContext.Provider> */}
      </CurrentUserProvider>
    </AuthContext.Provider>
  );
};

export default Admin;
