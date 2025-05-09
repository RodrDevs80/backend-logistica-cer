import Camionero from "../models/Camionero.js";

const getAllCamioneros = async (req, res) => {
    try {
        const camioneros = await Camionero.findAll();
        if (camioneros.length === 0) {
            res.status(200).json({ status: 200, message: 'No hay camioneros en la base de datos!!!' })
        } else {
            res.status(200).json(camioneros);
        }

    } catch (error) {
        res.status(500).json({ error: "Error al obtener el listado de camioneros", message: error.message });
    }
}
const getCamioneroById = async (req, res) => {
    try {
        const id = req.params.id;
        const camioneroById = await Camionero.findByPk(id);
        if (camioneroById === null) {
            res.status(400).json({ status: 400, title: 'Bad Request', message: 'No existe el camionero buscado' });
        } else {
            res.status(200).json({ status: 200, Camionero: camioneroById })
        }

    } catch (error) {
        res.status(500).json({ error: "Error al obtener camionero por id", message: error.message });
    }
}

const createCamionero = async (req, res) => {
    try {
        const { cuit, nombre, telefono, domicilio, salario } = req.body;
        const newCamionero = await Camionero.create({ cuit, nombre, telefono, domicilio, salario });
        res.status(201).json({ status: 201, message: 'Se creo de manera exitosa un nuevo camionero', camionero: newCamionero })
    } catch (error) {
        res.status(500).json({ error: "Error al intentar crear nuevo camionero", message: error.message });
    }
}
const deleteCamioneroById = async (req, res) => {
    try {
        const id = req.params.id;
        const camioneroEliminado = await Camionero.findByPk(id);
        if (camioneroEliminado === null) {
            res.status(400).json({ status: 400, title: 'Bad Request', message: 'No existe el Camionero buscado' });
        } else {
            await Camionero.destroy({
                where: {
                    id
                },
            });
            res.status(200).json({ status: 200, message: `Se elimino correctamente el Camionero con el id: ${id} `, Camionero: camioneroEliminado })
        }

    } catch (error) {
        res.status(500).json({ error: "Error al intentar eliminar camionero", message: error.message });
    }
}

const updateCamioneroById = async (req, res) => {
    try {
        const id = req.params.id;
        const { cuit, nombre, telefono, domicilio, salario } = req.body;
        const camioneroActualizado = await Camionero.findByPk(id);
        if (camioneroActualizado === null) {
            res.status(400).json({ status: 400, title: 'Bad Request', message: 'No existe el Camionero buscado' });
        } else {
            await Camionero.update(
                {
                    cuit,
                    nombre,
                    telefono,
                    domicilio,
                    salario
                },
                {
                    where: {
                        id,
                    },
                },
            );
            res.status(200).json({ status: 200, message: `Se Actualizo correctamente el Camionero con el id: ${id} ` })
        }

    } catch (error) {
        res.status(500).json({ error: "Error al intentar actualizar camionero", message: error.message });
    }
}
export { getAllCamioneros, getCamioneroById, createCamionero, deleteCamioneroById, updateCamioneroById }