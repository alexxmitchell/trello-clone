require("dotenv").config();
const { ApolloServer } = require("apollo-server");

const port = process.env.PORT || 3000;

const typeDefs = require('./GraphQL/schema');
const resolvers = require('./GraphQL/resolvers');
const UserAPI = require('./datasources/user');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    userAPI: new UserAPI()
  })
});

server.listen(port, ()=> {
  console.log(`Listening on port ${port}`, 'GraphQl server');
});