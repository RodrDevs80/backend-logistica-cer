import Camion from "../models/Camion.js";


const getAllCamiones = async (req, res) => {
    try {
        const camiones = await Camion.findAll();
        if (camiones.length === 0) {
            res.status(200).json({ status: 200, message: 'No hay camiones en la base de datos!!!' })
        } else {
            res.status(200).json(camiones);
        }

    } catch (error) {
        res.status(500).json({ error: "Error al obtener el listado de camiones", message: error.message });
    }
}


const getCamionById = async (req, res) => {
    try {
        const id = req.params.id;
        const camionById = await Camion.findByPk(id);
        if (camionById === null) {
            res.status(400).json({ status: 400, title: 'Bad Request', message: 'No existe el Camion buscado' });
        } else {
            res.status(200).json({ status: 200, Camion: camionById })
        }

    } catch (error) {
        res.status(500).json({ error: "Error al obtener Camion por id", message: error.message });
    }
}


const createCamion = async (req, res) => {
    try {
        const { patente, marca, modelo, capacidadDeCarga } = req.body;
        const newCamion = await Camion.create({ patente, marca, modelo, capacidadDeCarga });
        res.status(201).json({ status: 201, message: 'Se creo de manera exitosa un nuevo Camion', autor: newCamion })
    } catch (error) {
        res.status(500).json({ error: "Error al intentar crear nuevo Camion", message: error.message });
    }
}


const deleteCamionById = async (req, res) => {
    try {
        const id = req.params.id;
        const camionEliminado = await Camion.findByPk(id);
        if (camionEliminado === null) {
            res.status(400).json({ status: 400, title: 'Bad Request', message: 'No existe el Camion buscado' });
        } else {
            await Camion.destroy({
                where: {
                    id
                },
            });
            res.status(200).json({ status: 200, message: `Se elimino correctamente el Camion con el id: ${id} `, Camion: camionEliminado })
        }

    } catch (error) {
        res.status(500).json({ error: "Error al intentar eliminar Camion", message: error.message });
    }
}


const updateCamionById = async (req, res) => {
    try {
        const id = req.params.id;
        const { patente, marca, modelo, capacidadDeCarga } = req.body;
        const camionActualizado = await Camion.findByPk(id);
        if (camionActualizado === null) {
            res.status(400).json({ status: 400, title: 'Bad Request', message: 'No existe el Camion buscado' });
        } else {
            await Camion.update(
                {
                    patente,
                    marca,
                    modelo,
                    capacidadDeCarga
                },
                {
                    where: {
                        id,
                    },
                },
            );
            res.status(200).json({ status: 200, message: `Se Actualizo correctamente el Camion con el id: ${id} ` })
        }

    } catch (error) {
        res.status(500).json({ error: "Error al intentar actualizar Camion", message: error.message });
    }
}



export { getAllCamiones, getCamionById, createCamion, deleteCamionById, updateCamionById }