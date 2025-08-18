import { Request, Response } from "express";
import getPostulantesService from "../../services/postulantes/getPostulantesService";



export async function getPostulantesController(req: Request, res: Response){

    let arrPostulantes = await getPostulantesService();

    //TODO: filtrar info que se mande al front

    res.json(arrPostulantes);
}