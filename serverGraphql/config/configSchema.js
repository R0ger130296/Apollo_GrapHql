;
'use stric'

const { makeExecutableSchema } = require("graphql-tools"), { graphqlHTTP } = require("express-graphql"), { join, dirname } = require("path"), { readFileSync } = require("fs"),
    cursoresolver = require('../resolvers/cursos.resolvers'),
    estudianteresolver = require('../resolvers/estudiantes.resolvers')

typeDefs = readFileSync(join(dirname('../'), 'schemas', 'schemas.graphql'), 'utf-8'),
    schemas = makeExecutableSchema({ typeDefs, resolvers: [cursoresolver, estudianteresolver] });

let IniciarGraphql = graphqlHTTP({
    schema: schemas,
    // rootValue: cursoresolver,
    graphiql: true,
});

module.exports = IniciarGraphql