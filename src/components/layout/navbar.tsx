"use client";

import { useAuth } from "@/context/AuthContext";
import { useTheme } from "@/context/ThemeContext";
import { Button } from "../ui/button";

export default function Navbar() {
  const { user, logout, isAuthenticated } = useAuth();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav>
      {isAuthenticated ? (
        <>
          <p>Olá, {user?.name}!</p>
          <Button className="mr-2" onClick={logout}>
            Sair
          </Button>
          <Button onClick={toggleTheme} className="p-2">
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </Button>
        </>
      ) : (
        <p>Você não está logado.</p>
      )}
    </nav>
  );
}
