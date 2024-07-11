import { createApp, defineEventHandler } from "h3";

export const app = createApp();

app.use(defineEventHandler(() => "Hello world!"));

import { toWebHandler } from "h3";

const server = Bun.serve({
  port: 3001 || process.env.PORT,
  fetch: toWebHandler(app),
});

// const server = Bun.serve({
//   port: 3000,
//   fetch(request) {
//   return new Response("Welcome to Bun!");
//   },
//  });
 
//  console.log(`Listening on ${server.url}`); 
