import { Router } from "express";

import { getCandidatosController } from "../controllers/candidatos/getCandidatosController";
import { postCandidatoController } from "../controllers/candidatos/postCandidatoController";

const router = Router();

router.get("/candidatos", getCandidatosController);


router.post("/candidato", postCandidatoController);


export default router;