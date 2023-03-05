import { createContext, useState, useEffect } from 'react';
import {
  loginWithCredentials,
  signInWithCredentials,
  signInWithGoogle,
  authStateChange,
  logoutFirebase,
} from '../firebase/providers';

import { AuthStateContext } from '../interfaces/IAuthStateContext';

const initState: Pick<
  AuthStateContext,
  'status' | 'userId'
> = {
  userId: null,
  status: 'checking',
};

export const AuthContext = createContext(
  {} as AuthStateContext,
);

interface IElement {
  children: JSX.Element | JSX.Element[];
}

export const AuthProvider = ({ children }: IElement) => {
  const [session, setSession] = useState(initState);

  useEffect(() => {
    authStateChange(setSession);
  }, []);

  const handleLogOut = async () => {
    logoutFirebase();
    setSession({
      userId: null,
      status: 'no-authenticated',
    });
  };

  const validateAuth = (userId: string | undefined) => {
    if (userId) {
      return setSession({
        userId,
        status: 'authenticated',
      });
    }

    handleLogOut();
  };

  const checking = () => {
    setSession((prev) => ({ ...prev, status: 'checking' }));
  };

  const handleLoginWithGoogle = async () => {
    checking();
    const userId = await signInWithGoogle();
    validateAuth(userId);
  };

  const handleLoginWithCredentials = async (
    password: string,
    email: string,
  ) => {
    checking();
    const userId = await loginWithCredentials({
      email,
      password,
    });
    validateAuth(userId);
  };

  const handleRegisterWithCredentials = async (
    password: string,
    email: string,
  ) => {
    checking();
    const userId = await signInWithCredentials({
      email,
      password,
    });
    validateAuth(userId);
  };

  return (
    <AuthContext.Provider
      value={{
        ...session,
        handleLoginWithGoogle,
        handleLoginWithCredentials,
        handleRegisterWithCredentials,
        handleLogOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
