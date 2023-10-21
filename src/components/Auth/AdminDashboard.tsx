import { useEffect } from 'react';
import { useCurrentUser } from '../CurrentUserContext';

const AdminDashboard = () => {
  const { currentUser, fetchCurrentUser } = useCurrentUser();

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  console.log('current user in admin: ', currentUser.role);

  return <div>Admin Dashboard</div>;
};

export default AdminDashboard;
