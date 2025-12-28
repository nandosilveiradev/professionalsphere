import { prisma } from "../../lib/prisma";

async function main() {
  await prisma.user.deleteMany({});
  console.log("Todos os usuários foram apagados!");
}

main()
.catch((e) => {
  console.error(e);
  process.exit(1);
})
.finally(async () => {
  await prisma.$disconnect();
});
