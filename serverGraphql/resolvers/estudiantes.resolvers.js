;
'use stric'
const estudianteQuerys = require('./queries/estudiante.queries'),
    estudianteMutations = require('./mutations/estudiante.mutation')
module.exports = {
    Query: estudianteQuerys,
    Mutation: estudianteMutations
}