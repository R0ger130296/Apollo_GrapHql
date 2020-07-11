;
'use stric'

let connectDb = require('../../config/db'),
    cursoModel = require('../../modelos/cursos');

module.exports = {
    getCursos: async() => {
        let db, cursos
        try {
            db = await connectDb(
                cursos = await cursoModel.find()
            )
        } catch (error) {
            console.error(error)
        }
        return cursos;
    },

    getCurso: async(_, { id }) => {
        let db, cursos
        try {
            db = await connectDb(
                cursos = await cursoModel.find({ _id: id })
            )
        } catch (error) {
            console.error(error)
        }
        return cursos;
    }
}

// getCurso