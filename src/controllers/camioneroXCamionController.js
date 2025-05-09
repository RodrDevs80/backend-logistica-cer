import Camion from "../models/Camion.js";
import Camionero from "../models/Camionero.js";
import CamioneroXCamion from "../models/CamioneroXCamion.js";

const getAllCamionerosXCamiones = async (req, res) => {
    try {
        const camionerosXCamiones = await CamioneroXCamion.findAll();
        if (camionerosXCamiones.length === 0) {
            res.status(200).json({ status: 200, message: 'No hay camionerosXCamiones en la base de datos!!!' })
        } else {
            res.status(200).json(camionerosXCamiones);
        }

    } catch (error) {
        res.status(500).json({ error: "Error al obtener el listado de  camionerosXCamion", message: error.message });
    }
}

const getCamioneroXCamionById = async (req, res) => {
    try {
        const id = req.params.id;
        const camioneroXCamionById = await CamioneroXCamion.findByPk(id, {
            include: [
                { model: Camionero, as: 'Camionero' }, //  'as' => alias de asociación
                { model: Camion, as: 'Camion' }
            ]
        });
        if (camioneroXCamionById === null) {
            res.status(400).json({ status: 400, title: 'Bad Request', message: 'No existe el  CamioneroXCamion buscado' });
        } else {
            res.status(200).json({ status: 200, camioneroXCamion: camioneroXCamionById })
        }

    } catch (error) {
        res.status(500).json({ error: "Error al obtener  CamioneroXCamion por id", message: error.message });
    }
}

const createCamioneroXCamion = async (req, res) => {
    try {
        const { camioneroId, camionId, fecha } = req.body;
        const newCamioneroXCamion = await CamioneroXCamion.create({ camioneroId, camionId, fecha });
        res.status(201).json({ status: 201, message: 'Se creo de manera exitosa un nuevo camioneroXCamion', camioneroXCamion: newCamioneroXCamion })
    } catch (error) {
        res.status(500).json({ error: "Error al intentar crear nuevo camionero", message: error.message });
    }
}

const deleteCamioneroXCamionById = async (req, res) => {
    try {
        const id = req.params.id;
        const camioneroXCamionEliminado = await CamioneroXCamion.findByPk(id);
        if (camioneroXCamionEliminado === null) {
            res.status(400).json({ status: 400, title: 'Bad Request', message: 'No existe el  CamioneroXCamion buscado' });
        } else {
            await CamioneroXCamion.destroy({
                where: {
                    id
                },
            });
            res.status(200).json({ status: 200, message: `Se elimino correctamente el  CamioneroXCamion con el id: ${id} `, camioneroXCamion: camioneroXCamionEliminado })
        }

    } catch (error) {
        res.status(500).json({ error: "Error al intentar eliminar camionero", message: error.message });
    }
}

const updateCamioneroXCamionById = async (req, res) => {
    try {
        const id = req.params.id;
        const { camioneroId, camionId, fecha } = req.body;
        const camioneroActualizado = await CamioneroXCamion.findByPk(id);
        if (camioneroActualizado === null) {
            res.status(400).json({ status: 400, title: 'Bad Request', message: 'No existe el  CamioneroXCamion buscado' });
        } else {
            await CamioneroXCamion.update(
                {
                    camioneroId,
                    camionId,
                    fecha
                },
                {
                    where: {
                        id,
                    },
                },
            );
            res.status(200).json({ status: 200, message: `Se Actualizo correctamente el  CamioneroXCamion con el id: ${id} ` })
        }

    } catch (error) {
        res.status(500).json({ error: "Error al intentar actualizar camionero", message: error.message });
    }
}


export { getAllCamionerosXCamiones, getCamioneroXCamionById, createCamioneroXCamion, deleteCamioneroXCamionById, updateCamioneroXCamionById }