import { Router } from "express";
import { createCamioneroXCamion, deleteCamioneroXCamionById, getAllCamionerosXCamiones, getCamioneroXCamionById, updateCamioneroXCamionById } from "../controllers/camioneroXCamionController.js";


const camioneroXcamionRoutes = Router();

camioneroXcamionRoutes.get("/camionerosXCamiones", getAllCamionerosXCamiones);

camioneroXcamionRoutes.get('/CamioneroXCamion-by-id/:id', getCamioneroXCamionById)

camioneroXcamionRoutes.post("/camioneroXCamion", createCamioneroXCamion);

camioneroXcamionRoutes.delete('/camioneroXCamion/:id', deleteCamioneroXCamionById)

camioneroXcamionRoutes.put('/camioneroXCamion/:id', updateCamioneroXCamionById)

export default camioneroXcamionRoutes;