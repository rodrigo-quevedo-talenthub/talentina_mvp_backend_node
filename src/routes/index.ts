import { Router } from "express";
import postulantesRouter from "./postulantes"

const router = Router()

router.use('/postulantes', postulantesRouter);


export default router;