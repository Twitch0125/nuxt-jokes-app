import { Joke } from ".prisma/client";
import { db } from "~~/server/utils/db";

export type RandomJokeGetResponse = Pick<Joke, "content" | "name" | "id">;
export default defineEventHandler(async () => {
  console.log("handling random");
  const count = await db.joke.count();
  const randomRowNumber = Math.floor(Math.random() * count);
  const [joke]: Array<RandomJokeGetResponse> = await db.joke.findMany({
    take: 1,
    skip: randomRowNumber,
    select: { content: true, name: true, id: true },
  });

  return joke;
});
