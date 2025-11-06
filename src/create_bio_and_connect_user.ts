import "dotenv/config";
import { PrismaBetterSQLite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../generated/prisma/client";

const dbPath = process.env.PRISMA_CLIENT_DATABASE_URL;
if (!dbPath) {
  throw new Error("Environment variable SSDATABASE_URL not defined!!");
}

const adapter = new PrismaBetterSQLite3({ url: dbPath });
const prisma = new PrismaClient({ adapter });

async function main() {
  const user = await prisma.user.create({
    data: {
      name: "Manuka",
    },
  });

  const bio = await prisma.userBio.create({
    data: {
      text: "abcdeefgdgd",
      userId: user.id,
    },
  });

  const result = await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      bio: {
        connect: {},
      },
    },
  });
  console.log("created user and connected bio:", result);
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
