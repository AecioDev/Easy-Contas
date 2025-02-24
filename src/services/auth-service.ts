import api from "../../pages/api/api";
import { LoginBody } from "./auth-schema";

export async function login(creds: LoginBody) {
  const response = await api.post("/login", { creds });
  return response.data; // Supondo que a resposta tenha `{ token, user }`
}

export function logout() {
  console.log("Usuário deslogado.");
}

export async function signUp(data: {
  nome: string;
  telefone: string;
  email: string;
  senha: string;
  role: string;
}) {
  try {
    const response = await api.post("/api/auth/signup", data);
    return { success: true, data: response.data };
  } catch (error: any) {
    return { error: error.response?.data?.error || "Erro ao criar conta" };
  }
}
