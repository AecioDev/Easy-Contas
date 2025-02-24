"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CircleDollarSign } from "lucide-react";
import { signUp } from "@/services/auth-service";
import { useToast } from "@/components/ui/use-toast";

export default function SignUpPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  // Estados para armazenar os valores dos inputs
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); // Impede o comportamento padrão do formulário
    setLoading(true);

    // Chamando a API de cadastro com os dados coletados
    const result = await signUp({
      nome,
      email,
      telefone,
      senha,
      role: "user", // Define um valor padrão para a função
    });

    if (result.error) {
      toast({
        variant: "destructive",
        title: "Erro",
        description: result.error,
      });
    } else {
      toast({
        title: "Sucesso",
        description: "Conta criada com sucesso!",
      });
      router.push("/login"); // Redireciona para login após cadastro
    }

    setLoading(false);
  }

  return (
    <div className="flex flex-col items-center justify-center h-full bg-background min-h-screen">
      <div className="flex items-center justify-center text-4xl text-primary mb-4">
        <CircleDollarSign size={32} className="mr-2" />
        <h1 className="font-bold">Minhas Contas</h1>
      </div>
      <div className="w-full max-w-sm bg-transparent border border-border rounded-lg p-4">
        <div>
          <h1 className="text-2xl text-primary font-bold text-center">
            Cadastro
          </h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="nome">Nome do Usuário</Label>
            <Input
              id="nome"
              name="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="telefone">Telefone com WhatsApp</Label>
            <Input
              id="telefone"
              name="telefone"
              type="tel"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="senha">Senha</Label>
            <Input
              id="senha"
              name="senha"
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Cadastrando..." : "Cadastrar"}
          </Button>
        </form>
      </div>
    </div>
  );
}
