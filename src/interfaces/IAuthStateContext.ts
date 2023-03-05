export interface AuthStateContext {
  userId: string | null;
  status: 'checking' | 'authenticated' | 'no-authenticated';
  handleLoginWithGoogle: () => Promise<void>;
  handleLogOut: () => Promise<void>;
  handleLoginWithCredentials: (
    password: string,
    email: string,
  ) => Promise<void>;
  handleRegisterWithCredentials: (
    password: string,
    email: string,
  ) => Promise<void>;
}
