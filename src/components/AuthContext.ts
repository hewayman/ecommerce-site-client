import { createContext } from 'react';

type AuthContextType = {
  tokenContext: string;
  setTokenContext: (x: string) => void;
  userIdContext: string;
  setUserIdContext: (x: string) => void;
};

const authContextDefaultValues: AuthContextType = {
  tokenContext: '',
  setTokenContext: () => {},
  userIdContext: '',
  setUserIdContext: () => {},
};

export const AuthContext = createContext<AuthContextType>(
  authContextDefaultValues
);
