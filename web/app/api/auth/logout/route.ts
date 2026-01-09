import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ success: true });

  // sobrescreve com um token inválido
  response.cookies.set("token", "logout", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60, // expira em 1 minuto (pode ser 0 também)
  });

  return response;
}
