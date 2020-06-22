import "dotenv/config";
import Express from "express";
import graphqlHTTP from "express-graphql";
import expressPlayground from "graphql-playground-middleware-express";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import { ProductResolver } from "./resolvers/ProductResolver";

const main = async () => {
  await createConnection();

  const schema = await buildSchema({
    resolvers: [ProductResolver],
    //validation - true when validating anything
    validate: false,
  });

  const app = Express();
  app.use(
    "/graphql",
    graphqlHTTP({
      schema: schema,
      graphiql: true,
    })
  );

  app.get("/playground", expressPlayground({ endpoint: "/graphql" }));
  app.listen(process.env.PORT || 4000);

  console.log(
    `Running a GraphQL API server at http://localhost:${
      process.env.PORT || 4000
    }/playground`
  );
};

main().catch((err) => console.error(err));
