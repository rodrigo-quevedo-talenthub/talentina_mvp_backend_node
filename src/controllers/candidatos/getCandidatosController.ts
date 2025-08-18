import { Request, Response } from "express";
import getCandidatosService from "../../services/candidatos/getCandidatosService";



export async function getCandidatosController(req: Request, res: Response){

    let arrCandidatos = await getCandidatosService();

    //TODO: filtrar info que se mande al front

    res.json(arrCandidatos);
}