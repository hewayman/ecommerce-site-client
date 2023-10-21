'use client';

import { useState } from 'react';
import { AuthContext } from '@/components/AuthContext';
import RegisterForm from '@/components/Auth/RegisterForm';
import { CurrentUserProvider } from '@/components/CurrentUserContext';
// import { UserContext } from '@/components/UserContext';
import useLocalStorage from '@/hooks/useLocalStorage';

const Register = () => {
  const [tokenContext, setTokenContext] = useLocalStorage('token', '');
  const [userIdContext, setUserIdContext] = useLocalStorage('user', '');
  // const [firstName, setFirstName] = useState<string>('');
  // const [lastName, setLastName] = useState<string>('');
  // const [email, setEmail] = useState<string>('');
  // const [isAdmin, setIsAdmin] = useState<boolean>(false);

  return (
    <AuthContext.Provider
      value={{ tokenContext, setTokenContext, userIdContext, setUserIdContext }}
    >
      {/* <CurrentUserProvider> */}
      <RegisterForm />
      {/* </CurrentUserProvider> */}
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
      {/* </UserContext.Provider> */}
    </AuthContext.Provider>
  );
};

export default Register;
