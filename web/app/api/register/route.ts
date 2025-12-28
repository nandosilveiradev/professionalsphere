import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; // Importa a instância que configuramos
import bcrypt from "bcryptjs"; // npm install bcryptjs

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, password, country, nationalId } = body;

    // 1. Validação básica
    if (!fullName || !email || !password || !country || !nationalId) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios." },
        { status: 400 }
        );
    }

    // 2. Hash da senha (Segurança)
    const hashedPassword = await bcrypt.hash(password, 10);

    // 3. Gerar urlHash (Necessário conforme seu schema.prisma)
    // Usando uma lógica simples de slugify + random para garantir o @unique
    const urlHash = fullName.toLowerCase().replace(/ /g, "-") + "-" + Math.random().toString(36).substring(7);

    // 4. Salvar no Banco via Prisma 7
    const user = await prisma.user.create({
      data: {
        fullName,
        email,
        password: hashedPassword,
        country,
        nationalId,
        urlHash, // O campo obrigatório que definimos no schema
      },
    });

    return NextResponse.json({ success: true, userId: user.id }, { status: 201 });

  } catch (error: any) {
    console.error("Erro no registro:", error);

    // Tratar erro de e-mail duplicado (P2002 do Prisma)
    if (error.code === "P2002") {
      return NextResponse.json(
        { error: "Este e-mail já está em uso." },
        { status: 409 }
        );
    }

    return NextResponse.json(
      { error: "Erro interno no servidor." },
      { status: 500 }
      );
  }
}
