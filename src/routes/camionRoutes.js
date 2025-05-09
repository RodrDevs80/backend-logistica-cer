import { Router } from "express";
import { createCamion, deleteCamionById, getAllCamiones, getCamionById, updateCamionById } from "../controllers/camionController.js";

const camionRouter = Router();

camionRouter.get("/camiones", getAllCamiones);

camionRouter.get('/camion-by-id/:id', getCamionById)

camionRouter.post("/camiones", createCamion);

camionRouter.delete('/camiones/:id', deleteCamionById)

camionRouter.put('/camiones/:id', updateCamionById)


export default camionRouter;