;
'use stric'

let estudianteModel = require('../../modelos/estudiantes');

module.exports = {
    nuevoEstudiante: async(root, { input }) => {
        let estudiante
        try {
            estudiante = await estudianteModel.create(input)
            input._id = estudiante.id
            console.log(estudiante)
        } catch (error) {
            console.error(error)
        }
        return input
    },

    editarEstudiante: async(root, { id, input }) => {
        let estudiante
        try {
            await estudianteModel.updateOne({ _id: id }, { $set: input })
            estudiante = await estudianteModel.findOne({ _id: id })
        } catch (error) {
            console.error(error)
        }
        return estudiante
    }
}