import { sendError } from "h3";
import { db } from "~~/server/utils/db";
export default defineEventHandler(async (event) => {
  try {
    const { name, content } = await useBody<{ name: string; content: string }>(
      event
    );
    console.log("data", { name, content });
    if (typeof name !== "string" || typeof content !== "string") {
      throw new Error("form not submitted correctly");
    }
    const fields = { name, content };
    const joke = await db.joke.create({ data: fields });
    //I would like to use navigateTo to do client side routing, but looks like we have to use sendRedirect for now or handle it clientSide
    return joke;
  } catch (err) {
    return sendError(event, err);
  }
});
