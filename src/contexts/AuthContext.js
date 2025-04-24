import { createContext } from 'react';

const AuthContext = createContext({
  isAuthenticated: false,
  user: null,
  login: () => {},
  logout: () => {},
  // Add other authentication-related values and functions as needed
});

export default AuthContext;