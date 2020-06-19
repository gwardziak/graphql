import "dotenv/config";
import Express from "express";
import graphqlHTTP from "express-graphql";
import "reflect-metadata";
import { buildSchema, Query, Resolver } from "type-graphql";
import { createConnection } from "typeorm";

@Resolver()
class ProductResolver {
  @Query((returns) => String)
  async getProduct() {
    return "Borowik";
  }
}

const main = async () => {
  await createConnection();

  const schema = await buildSchema({
    resolvers: [ProductResolver],
  });

  const app = Express();
  app.use(
    "/graphql",
    graphqlHTTP({
      schema: schema,
      graphiql: true,
    })
  );
  app.listen(4000);
  console.log("Running a GraphQL API server at http://localhost:4000/graphql");
};

main();
