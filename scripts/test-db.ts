import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

async function main() {
  const usuarios = await prisma.usuarios.findMany();
  console.log(usuarios);
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
