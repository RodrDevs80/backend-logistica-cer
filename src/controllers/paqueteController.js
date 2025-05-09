import Paquete from "../models/Paquete.js";

const getAllPaquetes = async (req, res) => {
    try {
        const paquetes = await Paquete.findAll();
        if (paquetes.length === 0) {
            res.status(200).json({ status: 200, message: 'No hay paquetes en la base de datos!!!' })
        } else {
            res.status(200).json(paquetes);
        }

    } catch (error) {
        res.status(500).json({ error: "Error al obtener el listado de paquetes", message: error.message });
    }
};

const getPaqueteById = async (req, res) => {
    try {
        const id = req.params.id;
        const paqueteById = await Paquete.findByPk(id);
        if (paqueteById === null) {
            res.status(400).json({ status: 400, title: 'Bad Request', message: 'No existe la Paquete buscado' });
        } else {
            res.status(200).json({ status: 200, paquete: paqueteById })
        }

    } catch (error) {
        res.status(500).json({ error: "Error al obtener Paquete por id", message: error.message });
    }
}

const createPaquete = async (req, res) => {
    try {
        const { codigo, descripcion, direccion, destinatario, domicilioDestinatario, camioneroId, provinciaId } = req.body;
        const newPaquete = await Paquete.create({
            codigo,
            descripcion,
            direccion,
            destinatario,
            domicilioDestinatario,
            camioneroId,
            provinciaId
        });
        res.status(201).json({ status: 201, message: 'Se creo de manera exitosa un nuevo Paquete', paquete: newPaquete })
    } catch (error) {
        res.status(500).json({ error: "Error al intentar crear nuevo Paquete", message: error.message });
    }
};

const deletePaqueteById = async (req, res) => {
    try {
        const id = req.params.id;
        const paqueteEliminado = await Paquete.findByPk(id);
        if (paqueteEliminado === null) {
            res.status(400).json({ status: 400, title: 'Bad Request', message: 'No existe el paquete buscado' });
        } else {
            await Paquete.destroy({
                where: {
                    id
                },
            });
            res.status(200).json({ status: 200, message: `Se elimino correctamente el paquete con el id: ${id} `, paquete: paqueteEliminado })
        }

    } catch (error) {
        res.status(500).json({ error: "Error al intentar eliminar Paquete", message: error.message });
    }
}

const updatePaqueteById = async (req, res) => {
    try {
        const id = req.params.id;
        const { codigo, descripcion, direccion, destinatario, domicilioDestinatario, camioneroId, provinciaId } = req.body;
        const paqueteActualizado = await Paquete.findByPk(id);
        if (paqueteActualizado === null) {
            res.status(400).json({ status: 400, title: 'Bad Request', message: 'No existe el paquete buscado' });
        } else {
            await Paquete.update(
                {
                    codigo,
                    descripcion,
                    direccion,
                    destinatario,
                    domicilioDestinatario,
                    camioneroId,
                    provinciaId
                },
                {
                    where: {
                        id,
                    },
                },
            );
            res.status(200).json({ status: 200, message: `Se Actualizo correctamente el paquete con el id: ${id} ` })
        }

    } catch (error) {
        res.status(500).json({ error: "Error al intentar actualizar Paquete", message: error.message });
    }
}

export { getAllPaquetes, getPaqueteById, createPaquete, deletePaqueteById, updatePaqueteById }
