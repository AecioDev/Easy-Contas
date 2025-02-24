import { z } from "zod";

export interface LoginBody {
  usuario: string;
  senha: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  password: string;
  role: string;
}

export const SignUpSchema = z.object({
  name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(10, "Telefone inválido"),
  password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
  role: z.string().min(3, "Função deve ter pelo menos 3 caracteres"),
});

export const SignInSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
});

export const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  role: z.string(),
});
