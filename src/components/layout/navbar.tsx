"use client";

import { useAuth } from "@/context/AuthContext";
import { useTheme } from "@/context/ThemeContext";
import { Button } from "../ui/button";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav>
      {isAuthenticated && (
        <>
          <Button className="mr-2" onClick={logout}>
            Sair
          </Button>
        </>
      )}
    </nav>
  );
}
