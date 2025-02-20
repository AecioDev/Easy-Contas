import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const usuarios = await prisma.usuario.findMany();
      res.status(200).json(usuarios);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar usuários" });
    }
  } else if (req.method === "POST") {
    const { nome, email, password, role } = req.body;
    try {
      const usuario = await prisma.usuario.create({
        data: {
          nome,
          email,
          password,
          role,
        },
      });
      res.status(201).json(usuario);
    } catch (error) {
      res.status(500).json({ error: "Erro ao criar usuário" });
    }
  } else {
    res.status(405).json({ error: "Método não permitido" });
  }
}
