import express from "express";
import router from "./router";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express5";
import { typeDefs } from "./graphql/typeDef";
import { resolvers } from "./graphql/resolvers";
import cors from "cors";

async function main() {
  const PORT = 3080;
  const app = express();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  app.use(cors());
  app.use(router);
  app.use("/graphql", express.json(), expressMiddleware(server));
  app.listen(PORT, () => {
    console.log(`Express server listening at PORT ${PORT}`);
  });
}

main();
