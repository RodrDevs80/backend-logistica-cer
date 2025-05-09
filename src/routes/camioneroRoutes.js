import { Router } from "express";
import { createCamionero, deleteCamioneroById, getAllCamioneros, getCamioneroById, updateCamioneroById } from "../controllers/camioneroController.js";

const camioneroRouter = Router();

camioneroRouter.get("/camioneros", getAllCamioneros);

camioneroRouter.get('/camionero-by-id/:id', getCamioneroById);

camioneroRouter.post("/camioneros", createCamionero);

camioneroRouter.delete('/camioneros/:id', deleteCamioneroById)

camioneroRouter.put('/camioneros/:id', updateCamioneroById)


export default camioneroRouter;