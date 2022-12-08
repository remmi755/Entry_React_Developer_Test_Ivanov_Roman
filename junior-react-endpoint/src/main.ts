import { ApolloServer } from 'apollo-server';

import typeDefs from './schema';
import resolvers from './resolvers';


const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers
});

server.listen().then(({ url }) => {
    console.log(`
     🚀  Server is running!
     🔉  Listening on port 4000
    🚀  Server ready at ${url}
    `);
});