"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { useRouter } from "next/navigation";
import {
  login as loginService,
  logout as logoutService,
} from "@/services/auth-service";
import { jwtDecode } from "jwt-decode";
import { LoginBody } from "@/services/auth-schema";

interface UserStored {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface AuthContextProps {
  user: UserStored | null;
  login: (creds: LoginBody) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserStored | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken: UserStored = jwtDecode(token);
        setUser({
          id: decodedToken.id,
          name: decodedToken.name,
          email: decodedToken.email,
          role: decodedToken.role,
        });
      } catch (error) {
        console.error("Token inválido:", error);
        localStorage.removeItem("token"); // Remove o token inválido
      }
    }
  }, []);

  const login = async (creds: LoginBody) => {
    const { token, user } = await loginService(creds);
    localStorage.setItem("token", token);
    setUser(user);
    router.push("/"); // Redireciona para a página inicial
  };

  const logout = () => {
    logoutService();
    localStorage.removeItem("token");
    setUser(null);
    router.push("/login"); // Redireciona para a página de login
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, isAuthenticated: !!user }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro do AuthProvider");
  }
  return context;
};
