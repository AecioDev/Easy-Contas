"use client";

import { useAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Layout } from "@/components/layout/layout";
import Dashboard from "./dashboard/page";

export default function HomePage() {
  const { user, isAuthenticated } = useAuth();
  const [countdown, setCountdown] = useState(5); // Timer de 5 segundos
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      const timer = setInterval(() => {
        setCountdown((prev) => prev - 1); // Decrementa o contador
      }, 1000);

      // Redireciona para a página de login após 5 segundos
      if (countdown === 0) {
        router.push("/login");
      }

      return () => clearInterval(timer); // Limpa o timer ao desmontar
    }
  }, [countdown, isAuthenticated, router]);

  if (!isAuthenticated) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <p>Você não está autenticado. Será redirecionado para o login em:</p>
        <button
          onClick={() => router.push("/login")}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#0070f3",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Fazer Login ({countdown}s)
        </button>
      </div>
    );
  }
  console.log(user);

  return (
    <Layout>
      <Dashboard />
    </Layout>
  );
}
