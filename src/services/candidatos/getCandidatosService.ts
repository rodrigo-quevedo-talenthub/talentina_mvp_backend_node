import CandidatoDAO from "../../DAOs/CandidatoDAO";
import {Candidato} from "../../types/entities/Candidato";



export default async function getPostulantesService(): Promise<Candidato[]>{

    let arrCandidatos = await CandidatoDAO.getCandidatos();

    return arrCandidatos;
}