import { createContext, useContext, useState, useEffect } from 'react';
import { authApi } from '../api/authApi';
import { storage } from '../utils/storage';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      const token = storage.getToken();
      if (token) {
        try {
          const { data } = await authApi.getMe();
          setUser(data.user);
          storage.setUser(data.user);
        } catch {
          storage.clear();
        }
      }
      setIsLoading(false);
    };

    initAuth();
  }, []);

  const login = async (email, password) => {
    const { data } = await authApi.login(email, password);
    storage.setToken(data.token);
    storage.setUser(data.user);
    setUser(data.user);
    return data.user;
  };

  const register = async (name, email, password) => {
    const { data } = await authApi.register(name, email, password);
    storage.setToken(data.token);
    storage.setUser(data.user);
    setUser(data.user);
    return data.user;
  };

  const logout = async () => {
    try {
      await authApi.logout();
    } catch {
    }
    storage.clear();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: !!user,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
