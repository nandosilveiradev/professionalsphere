// app/(system)/dashboard/page.tsx
// Aqui eu defino a página do dashboard. Como está dentro de (system), a URL final é /dashboard.

import { cookies } from "next/headers";
// Importo a função cookies do Next.js para acessar os cookies direto no servidor.

import { redirect } from "next/navigation";
// Importo redirect para poder mandar o usuário para /login caso não esteja autenticado.

import { jwtVerify } from "jose";
// Importo jwtVerify da biblioteca jose para validar o token JWT que está salvo no cookie.

const secret = new TextEncoder().encode(process.env.JWT_SECRET);
// Crio a chave secreta que vai ser usada para verificar o token. Ela vem da variável de ambiente JWT_SECRET.

export default async function DashboardPage() {
// Defino a função assíncrona que representa a página do dashboard.

  const cookieStore = await cookies();
  // Uso await porque cookies() é assíncrono. Isso me dá acesso ao armazenamento de cookies.

  const token = cookieStore.get("token")?.value;
  // Pego o valor do cookie chamado "token". Se não existir, token será undefined.

  if (!token) {
    redirect("/login");
  }
  // Se não tiver token, redireciono direto para a página de login.

  try {
    await jwtVerify(token, secret);
    // Se tiver token, tento verificar se ele é válido usando jwtVerify e a chave secreta.
  } catch {
    redirect("/login");
    // Se a verificação falhar (token inválido ou expirado), redireciono para login.
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <p>Bem-vindo ao sistema.</p>
    </div>
    );
  // Se o token for válido, renderizo o conteúdo do dashboard normalmente.
}
