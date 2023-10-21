'use client';

import { AuthContext } from '@/components/AuthContext';
import LoginForm from '@/components/Auth/LoginForm';
// import { UserContext } from '@/components/UserContext';
import useLocalStorage from '@/hooks/useLocalStorage';
import { useState } from 'react';

const Login = () => {
  const [tokenContext, setTokenContext] = useLocalStorage('token', '');
  const [userIdContext, setUserIdContext] = useLocalStorage('user', '');
  // const [firstName, setFirstName] = useState<string>('');
  // const [lastName, setLastName] = useState<string>('');
  // const [email, setEmail] = useState<string>('');
  // const [isAdmin, setIsAdmin] = useState<boolean>(false);

  return (
    <AuthContext.Provider
      value={{
        tokenContext,
        setTokenContext,
        userIdContext,
        setUserIdContext,
      }}
    >
      {/* <UserContext.Provider
        value={{
          firstNameContext: [firstName, setFirstName],
          lastNameContext: [lastName, setLastName],
          adminContext: [isAdmin, setIsAdmin],
          // firstName,
          // setFirstName,
          // email,
          // setEmail,
        }}
      > */}
      <LoginForm />
      {/* </UserContext.Provider> */}
    </AuthContext.Provider>
  );
};

export default Login;
