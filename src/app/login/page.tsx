"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LoginPage() {
  const { login } = useAuth();
  const [email, setEmail] = useState("master@empresa.com.br");
  const [password, setPassword] = useState("admin123");
  const router = useRouter();
  const [error, setError] = useState("");

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
    <div className="grid h-full grid-cols-2">
      {/* ESQUERDA */}
      <div className="relative h-full w-full">
        <Image
          src="/logo_maior_SF.png"
          alt="Faça Login"
          fill
          className="object-cover"
        />
      </div>

      {/* DIREITA */}
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <div className="flex items-center justify-center">
              <Image
                src="/logo_login_sf.png"
                width={173}
                height={35}
                alt="Finance AI"
                className="mb-4 w-full"
              />
            </div>
            <CardTitle className="text-2xl text-orange-400 font-bold text-center">
              Acesso
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label className="text-xl text-orange-400" htmlFor="email">
                  E-mail
                </Label>
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
                <Label className="text-xl text-orange-400" htmlFor="password">
                  Senha
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full mt-4 bg-orange-400 font-semibold text-xl text-yellow-200 hover:bg-orange-500 hover:text-yellow-100 transition-all duration-300"
              >
                Entrar
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
