import api from "./api"; // Arquivo de configuração do Axios

export async function login(email: string, password: string) {
  const response = await api.post("/login", { email, password });
  return response.data; // Supondo que a resposta tenha `{ token, user }`
}

export function logout() {
  // Se necessário, faz alguma lógica adicional no backend
  console.log("Usuário deslogado.");
}
