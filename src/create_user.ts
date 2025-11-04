import { PrismaBetterSQLite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../generated/prisma/client";

const adapter = new PrismaBetterSQLite3({
  url: process.env.PRISMA_CLIENT_DATABASE_URL,
});
const prisma = new PrismaClient({ adapter });
