import Prisma from "@prisma/client";
import type { PrismaClient as PrismaClientClass } from "@prisma/client";
const { PrismaClient } = Prisma;
let db: PrismaClientClass;

declare global {
  var __db: PrismaClientClass | undefined;
}

// this is needed because in development we don't want to restart
// the server with every change, but we want to make sure we don't
// create a new connection to the DB with every change either.
if (process.env.NODE_ENV === "production") {
  db = new PrismaClient();
} else {
  if (!global.__db) {
    global.__db = new PrismaClient();
  }
  db = global.__db;
}

export { db };
