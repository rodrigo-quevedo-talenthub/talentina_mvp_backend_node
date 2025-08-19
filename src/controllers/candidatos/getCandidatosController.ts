import { Request, Response } from "express";
import getCandidatosService from "../../services/candidatos/getCandidatosService";
import { CandidatoResponseDTO } from "../../DTOs/candidatos/outbound/CandidatoResponseDTO";



export async function getCandidatosController(req: Request, res: Response){

    let arrCandidatos = await getCandidatosService();

    //TODO: filtrar info que se mande al front
    // let arrCandidatosResponseDTO: CandidatoResponseDTO[] = filtrarInfoArrCandidatosService()

    let arrCandidatosResponseDTO: CandidatoResponseDTO[] = arrCandidatos as CandidatoResponseDTO[];

    res.json(arrCandidatosResponseDTO);
}