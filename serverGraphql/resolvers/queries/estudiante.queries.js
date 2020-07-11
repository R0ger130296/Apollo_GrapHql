;
'use stric'

let connectDb = require('../../config/db'),
    estudianteModel = require('../../modelos/estudiantes');

module.exports = {
    getEstudiantes: async() => {
        let db, cursos
        try {
            db = await connectDb(
                cursos = await estudianteModel.find()
            )
        } catch (error) {
            console.error(error)
        }
        return cursos;
    },

    getEstudiante: async(_, { id }) => {
        let db, cursos
        try {
            db = await connectDb(
                cursos = await estudianteModel.find({ _id: id })
            )
        } catch (error) {
            console.error(error)
        }
        return cursos;
    }
}