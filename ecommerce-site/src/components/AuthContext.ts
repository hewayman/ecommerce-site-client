import { createContext } from 'react';

type AuthContextType = {
  tokenContext: string;
  setTokenContext: (x: string) => void;
};

const authContexteDefaultValues: AuthContextType = {
  tokenContext: '',
  setTokenContext: () => {},
};

export const AuthContext = createContext<AuthContextType>(
  authContexteDefaultValues
);
