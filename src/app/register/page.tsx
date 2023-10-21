'use client';

import { AuthContext } from '@/components/AuthContext';
import RegisterForm from '@/components/Auth/RegisterForm';
import useLocalStorage from '@/hooks/useLocalStorage';

const Register = () => {
  const [tokenContext, setTokenContext] = useLocalStorage('token', '');
  const [userIdContext, setUserIdContext] = useLocalStorage('user', '');

  return (
    <AuthContext.Provider
      value={{ tokenContext, setTokenContext, userIdContext, setUserIdContext }}
    >
      <RegisterForm />
    </AuthContext.Provider>
  );
};

export default Register;
