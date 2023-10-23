import { useState, createContext, useEffect } from "react";
import axios from "../config/axios";
import {
  addAccessToken,
  removeAccessToken,
  getAccessToken,
} from "../utils/localStorage";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (getAccessToken()) {
      axios
        .get("/auth/me")
        .then((res) => {
          setAuthUser(res.data.user);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, []);

  const register = async (registerData) => {
    const res = await axios.post("/auth/register", registerData);

    addAccessToken(res.data.accessToken);
    setAuthUser(res.data.user);
  };

  const login = async (credential) => {
    const res = await axios.post("/auth/login", credential);
    addAccessToken(res.data.accessToken);
    setAuthUser(res.data.user);
  };

  const logout = () => {
    removeAccessToken();
    setAuthUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        authUser,
        login,
        register,
        isLoading,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
