import { NextResponse } from "next/server";

export async function POST() {
  // Cria resposta limpando o cookie
  const response = NextResponse.json({ success: true }, { status: 200 });

  response.cookies.set("token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 0, // expira imediatamente
  });

  return response;
}
