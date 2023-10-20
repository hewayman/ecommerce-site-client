'use client';

import { AuthContext } from '@/components/AuthContext';
import LoginForm from '@/components/Auth/LoginForm';
import useLocalStorage from '@/hooks/useLocalStorage';

const Login = () => {
  const [tokenContext, setTokenContext] = useLocalStorage('token', '');

  return (
    <AuthContext.Provider value={{ tokenContext, setTokenContext }}>
      <LoginForm />
    </AuthContext.Provider>
  );
};

export default Login;