'use client';

import AdminDashboard from '@/components/Auth/AdminDashboard';
import { AuthContext } from '@/components/AuthContext';
import { CurrentUserProvider } from '@/components/CurrentUserContext';
import useLocalStorage from '@/hooks/useLocalStorage';

const Admin = () => {
  const [tokenContext, setTokenContext] = useLocalStorage('token', '');
  const [userIdContext, setUserIdContext] = useLocalStorage('user', '');

  return (
    <AuthContext.Provider
      value={{ tokenContext, setTokenContext, userIdContext, setUserIdContext }}
    >
      <CurrentUserProvider>
        <AdminDashboard />
      </CurrentUserProvider>
    </AuthContext.Provider>
  );
};

export default Admin;
