import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // 1. Validação básica
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email e senha são obrigatórios." },
        { status: 400 }
        );
    }

    // 2. Buscar usuário no banco
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return NextResponse.json(
        { error: "Usuário não encontrado." },
        { status: 401 }
        );
    }

    // 3. Comparar senha com hash
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return NextResponse.json(
        { error: "Senha inválida." },
        { status: 401 }
        );
    }

    // 4. Gerar JWT
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET || "fallback_secret",
      { expiresIn: "7d" }
      );

    // 5. Retornar resposta com cookie HttpOnly
    const response = NextResponse.json({ success: true, userId: user.id }, { status: 200 });
    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 dias
    });

    return response;
  } catch (error: any) {
    console.error("Erro no login:", error);

    // 🔥 Sempre retorna JSON, mesmo em erro inesperado
    return NextResponse.json(
      { error: "Erro interno no servidor.", details: error?.message || null },
      { status: 500 }
      );
  }
}
