import { Router } from "express";
import candiatosRouter from "./candidatos"

const router = Router()

router.use('/', candiatosRouter);


export default router;