;
'use stric'
const cursosQuerys = require('./queries/curso.queries'),
    cursoMutations = require('./mutations/cursos.mutation'),
    cursoType = require('./types/curso.type');
module.exports = {
    Query: cursosQuerys,
    Mutation: cursoMutations,
    ...cursoType
}