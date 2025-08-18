import { Router } from "express";

import { getPostulantesController } from "../controllers/postulantes/getPostulantesController";

const router = Router();

router.get("/", getPostulantesController);


export default router;