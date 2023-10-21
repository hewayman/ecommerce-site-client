import { createContext, useContext, useState } from 'react';
import { AuthContext } from './AuthContext';
import APIURL from '@/helpers/environment';

type UserType = {
  firstName: string;
  lastName: string;
  role: string;
  email: string;
  // setEmail: (x: string) => void;
};

type CurrentUserContextType = {
  // currentUser: UserType;
  currentUser: any; //fix
  // setCurrentUser: (x: string) => void;
  fetchCurrentUser: any; //fix
};

const currentUserContextDefaultValues: CurrentUserContextType = {
  currentUser: { firstName: '', lastName: '', role: '', email: '' },
  // setCurrentUser: () => {},
  fetchCurrentUser: {},
};

export const CurrentUserContext = createContext<CurrentUserContextType>(
  currentUserContextDefaultValues
);

// export const CurrentUserContext = createContext()

export const CurrentUserProvider = ({ children }: any) => {
  const authContext = useContext(AuthContext);
  const userId = authContext.userIdContext;
  const [currentUser, setCurrentUser] = useState(null);

  const fetchCurrentUser = () => {
    console.log('userId', userId);

    if (userId !== '') {
      const url = `${APIURL}/user/${userId}`;

      fetch(url, { method: 'GET' })
        .then((res) => res.json())
        .then((data) => {
          setCurrentUser(data.user);
        });
    }
  };

  return (
    <CurrentUserContext.Provider value={{ currentUser, fetchCurrentUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export const useCurrentUser = () => useContext(CurrentUserContext);
