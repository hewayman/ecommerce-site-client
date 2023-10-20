'use client';

import { AuthContext } from '@/components/AuthContext';
import RegisterForm from '@/components/Auth/RegisterForm';
import useLocalStorage from '@/hooks/useLocalStorage';

const Register = () => {
  const [tokenContext, setTokenContext] = useLocalStorage('token', '');

  return (
    <AuthContext.Provider value={{ tokenContext, setTokenContext }}>
      <RegisterForm />
    </AuthContext.Provider>
  );
};

export default Register;
