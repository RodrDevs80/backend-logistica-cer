import { Router } from "express";
import { createPaquete, getAllPaquetes, getPaqueteById, updatePaqueteById } from "../controllers/paqueteController.js";
import { deleteCamionById } from "../controllers/camionController.js";

const paqueteRoutes = Router();

paqueteRoutes.get("/paquetes", getAllPaquetes);

paqueteRoutes.get('/paquete-by-id/:id', getPaqueteById)

paqueteRoutes.post("/paquetes", createPaquete);

paqueteRoutes.delete('/paquetes/:id', deleteCamionById)

paqueteRoutes.put('/paquetes/:id', updatePaqueteById)




export default paqueteRoutes;