;
'use stric'

let cursoModel = require('../../modelos/cursos');

module.exports = {
    nuevoCurso: async(_, { input }) => {
        const defaults = {
            descripcion: "",
            genero: ""
        }
        const nuevoCurso = (defaults, input);
        let curso
        try {
            curso = await cursoModel.create({ nuevoCurso })
            nuevoCurso._id = curso.id
            console.log(nuevoCurso._id)
        } catch (error) {
            console.error(error)
        }
        return nuevoCurso
    },

    editarCurso: async(_, { id, input }) => {
        let curso
        try {
            let asistentes = []
            if (input.asistentes.length > 0) {
                input.asistentes.forEach(idEstuduante => {
                    asistentes.push(idEstuduante)
                })
            }
            input.asistentes = asistentes
            await cursoModel.updateOne({ _id: id }, { $set: input })
            curso = await cursoModel.findOne({ _id: id })
        } catch (error) {
            console.error(error)
        }
        return curso
    }
}