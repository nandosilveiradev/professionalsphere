import { prisma } from "../../lib/prisma";

export default async function UsersPage() {
  const users = await prisma.user.findMany({
    orderBy: { id: "desc" },
  });


  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Usuários cadastrados</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Nome</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">País</th>
            <th className="border border-gray-300 px-4 py-2">Documento</th>
            <th className="border border-gray-300 px-4 py-2">Criado em</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border border-gray-300 px-4 py-2">{user.fullName}</td>
              <td className="border border-gray-300 px-4 py-2">{user.email}</td>
              <td className="border border-gray-300 px-4 py-2">{user.country}</td>
              <td className="border border-gray-300 px-4 py-2">{user.nationalId}</td>
              <td className="border border-gray-300 px-4 py-2">
                
                {new Date(user.createdAt).toLocaleDateString("pt-BR")}
              </td>
            </tr>
            ))}
        </tbody>
      </table>
    </main>
    );
}
