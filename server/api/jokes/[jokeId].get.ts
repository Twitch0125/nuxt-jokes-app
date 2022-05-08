import { db } from "~/server/utils/db";

export type JokeidGetResponse = { id: string; name: string; content: string };
export default defineEventHandler(async (event) => {
  const data: JokeidGetResponse = await db.joke.findUnique({
    where: { id: event.context.params.jokeId },
    select: { id: true, name: true, content: true },
  });
  return data;
});
