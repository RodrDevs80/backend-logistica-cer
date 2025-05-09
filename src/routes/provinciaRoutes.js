import { Router } from "express";
import { createProvincia, deleteProvinciaById, getAllProvincias, getProvinciasById, updateProvinciaById } from "../controllers/provinciaController.js";

const provinciaRouter = Router();


provinciaRouter.get("/provincias", getAllProvincias);

provinciaRouter.get('/provincia-by-id/:id', getProvinciasById)

provinciaRouter.post("/provincias", createProvincia);

provinciaRouter.delete('/provincias/:id', deleteProvinciaById)

provinciaRouter.put('/provincias/:id', updateProvinciaById)


export default provinciaRouter;