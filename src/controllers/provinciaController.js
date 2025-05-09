import Provincia from "../models/Provincia.js";


const getAllProvincias = async (req, res) => {
    try {
        const provincias = await Provincia.findAll();
        if (provincias.length === 0) {
            res.status(200).json({ status: 200, message: 'No hay provincias en la base de datos!!!' })
        } else {
            res.status(200).json(provincias);
        }

    } catch (error) {
        res.status(500).json({ error: "Error al obtener el listado de provincias", message: error.message });
    }
}

const getProvinciasById = async (req, res) => {
    try {
        const id = req.params.id;
        const provinciaById = await Provincia.findByPk(id);
        if (provinciaById === null) {
            res.status(400).json({ status: 400, title: 'Bad Request', message: 'No existe la Provincia buscado' });
        } else {
            res.status(200).json({ status: 200, Provincia: provinciaById })
        }

    } catch (error) {
        res.status(500).json({ error: "Error al obtener Provincia por id", message: error.message });
    }
}
const createProvincia = async (req, res) => {
    try {
        const { codigo, nombre } = req.body;
        //console.log(codigo, nombre);
        const newProvincia = await Provincia.create({ codigo, nombre });
        res.status(201).json({ status: 201, message: 'Se creo de manera exitosa un nuevo Provincia', autor: newProvincia })
    } catch (error) {
        res.status(500).json({ error: "Error al intentar crear nuevo Provincia", message: error.message });
    }
}

const deleteProvinciaById = async (req, res) => {
    try {
        const id = req.params.id;
        const provinciaEliminado = await Provincia.findByPk(id);
        if (provinciaEliminado === null) {
            res.status(400).json({ status: 400, title: 'Bad Request', message: 'No existe la provincia buscado' });
        } else {
            await Provincia.destroy({
                where: {
                    id
                },
            });
            res.status(200).json({ status: 200, message: `Se elimino correctamente la provincia con el id: ${id} `, Provincia: provinciaEliminado })
        }

    } catch (error) {
        res.status(500).json({ error: "Error al intentar eliminar Provincia", message: error.message });
    }
}

const updateProvinciaById = async (req, res) => {
    try {
        const id = req.params.id;
        const { codigo, nombre } = req.body;
        const provinciaActualizado = await Provincia.findByPk(id);
        if (provinciaActualizado === null) {
            res.status(400).json({ status: 400, title: 'Bad Request', message: 'No existe la provincia buscado' });
        } else {
            await Provincia.update(
                {
                    codigo,
                    nombre
                },
                {
                    where: {
                        id,
                    },
                },
            );
            res.status(200).json({ status: 200, message: `Se Actualizo correctamente la provincia con el id: ${id} ` })
        }

    } catch (error) {
        res.status(500).json({ error: "Error al intentar actualizar Provincia", message: error.message });
    }
}


export { getAllProvincias, getProvinciasById, createProvincia, deleteProvinciaById, updateProvinciaById }