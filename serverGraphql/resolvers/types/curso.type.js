;
'use stric'

let estudiantesModel = require('../../modelos/estudiantes');
const e = require('express');

module.exports = {
    Curso: {
        asistentes: async({ asistentes }) => {
            let asistentesData, ids
            try {
                ids = asistentes ?
                    asistentes.map(id) : []
                asistentesData = ids.length ?
                    await estudiantesModel.find({
                        _id: { $in: ids }
                    }) : []
            } catch (error) {
                console.error(error)
            }
            return asistentesData;
        }
    }
}