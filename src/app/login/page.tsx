'use client';

import { AuthContext } from '@/components/AuthContext';
import LoginForm from '@/components/Auth/LoginForm';
import useLocalStorage from '@/hooks/useLocalStorage';

const Login = () => {
  const [tokenContext, setTokenContext] = useLocalStorage('token', '');
  const [userIdContext, setUserIdContext] = useLocalStorage('user', '');

  return (
    <AuthContext.Provider
      value={{
        tokenContext,
        setTokenContext,
        userIdContext,
        setUserIdContext,
      }}
    >
      <LoginForm />
    </AuthContext.Provider>
  );
};

export default Login;
