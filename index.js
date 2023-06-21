const express = require("express");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const { graphql } = require("graphql-compose");
const { elasticApiFieldConfig } = require("graphql-compose-elasticsearch");

const { GraphQLSchema, GraphQLObjectType } = graphql;

const expressPort = process.env.port || process.env.PORT || 9201;

const generatedSchema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Query",
    fields: {
      elastic77: elasticApiFieldConfig({
        host: "https://0f448043059d:a4264120-cd7a-4574-a449-2c5df0523cb1@appbase-demo-ansible-abxiydt-arc.searchbase.io",
        index: "gitxplore-app",
        apiVersion: "7.7",
        log: "debug",
      }),
    },
  }),
});

const server = express();

server.use(
  "/",
  cors(),
  graphqlHTTP({
    schema: generatedSchema,
    graphiql: true,
  })
);

server.listen(expressPort, () => {
  console.log(`🚀 The server is running on port ${expressPort}`);
});
