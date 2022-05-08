import { db } from "~/server/utils/db";

export type JokesGetResponse = Array<{ id: string; name: string }>;
export default defineEventHandler(async (event) => {
  const data: JokesGetResponse = await db.joke.findMany({
    take: 5,
    select: { id: true, name: true },
    orderBy: { createdAt: "desc" },
  });
  return data;
});
