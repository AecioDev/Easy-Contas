import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { SignUpSchema } from "@/services/auth-schema";

export default async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validar os dados com Zod
    const validatedData = SignUpSchema.parse(body);

    // Verificar se o email já existe
    const existingUser = await prisma.user.findUnique({
      where: { email: validatedData.email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "Email já cadastrado" },
        { status: 400 }
      );
    }

    // Criptografar a senha
    const hashedPassword = await bcrypt.hash(validatedData.password, 10);

    // Criar o usuário
    const user = await prisma.user.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        password: hashedPassword,
        role: validatedData.role,
      },
    });

    return NextResponse.json({ success: true, user });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors[0].message },
        { status: 400 }
      );
    }
    return NextResponse.json({ error: "Erro ao criar conta" }, { status: 500 });
  }
}
