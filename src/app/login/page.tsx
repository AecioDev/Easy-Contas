"use client";

import { useState } from "react";
import { redirect, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CircleDollarSign, Lightbulb, PlusIcon } from "lucide-react";

export default function LoginPage() {
  const { login } = useAuth();
  const [email, setEmail] = useState("master@empresa.com.br");
  const [password, setPassword] = useState("admin123");
  const router = useRouter();
  const [error, setError] = useState("");

  const handleCadastro = () => {
    redirect("/signup");
  };

  const handleLembrar = () => {
    alert("Chama Lembrar...");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
    } catch (err) {
      setError("Credenciais inválidas." + err);
      console.log(error);
    }
    router.push("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-full bg-background min-h-screen">
      <div className="flex items-center justify-center text-4xl text-primary mb-4">
        <CircleDollarSign size={32} className="mr-2" />
        <h1 className="font-bold">Minhas Contas</h1>
      </div>
      <div className="w-full max-w-sm bg-transparent border border-border rounded-lg p-4">
        <div>
          <h1 className="text-2xl text-primary font-bold text-center">
            Acesso
          </h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Entrar
          </Button>
        </form>
        <div className="flex justify-between mt-2">
          <Button
            variant="link"
            className="text-primary font-bold"
            onClick={() => handleLembrar()}
          >
            <Lightbulb />
            Lembrar-me
          </Button>
          <Button
            variant="link"
            className="text-primary font-bold"
            onClick={() => handleCadastro()}
          >
            <PlusIcon />
            Cadastrar
          </Button>
        </div>
      </div>
    </div>
  );
}
