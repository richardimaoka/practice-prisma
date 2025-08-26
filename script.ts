import "dotenv/config";
// .js file extension in the import statement, following:
//   https://www.prisma.io/docs/orm/prisma-schema/overview/generators?#importing-prisma-client
// since file extension is mandatory in Node.js runtime:
//   https://nodejs.org/api/esm.html#mandatory-file-extensions
import { PrismaClient } from "./generated/prisma/client.js";

const prisma = new PrismaClient();

async function main() {
  const users = await prisma.user.findMany();
  console.log(users);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
