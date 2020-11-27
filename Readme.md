# Graphql Elasticsearch Server :rocket:

Simple `express-graphql` server which can respond to graphql query for Github elasticsearch app hosted on [appbase.io](https://appbase.io).

**[graphql-compose-elasticsearch](https://github.com/graphql-compose/graphql-compose-elasticsearch)** package acts as ElasticSearch Rest proxy and helps in transforming `GraphQL query` into `elasticsearch query`.

## How to start?

- `git clone https://github.com/appbaseio-apps/graphql-github-server.git`
- `cd graphql-github-server`
- `yarn && yarn start`

## Graphiql query

```
{
  elastic50(host: "https://0f448043059d:a4264120-cd7a-4574-a449-2c5df0523cb1@appbase-demo-ansible-abxiydt-arc.searchbase.io") {
    search(
      index: "gitxplore-latest-app"
      body: "{\"query\": {\"terms\": {\"topics\": [\"javascript\"]}}}"
    )
  }
}

```
