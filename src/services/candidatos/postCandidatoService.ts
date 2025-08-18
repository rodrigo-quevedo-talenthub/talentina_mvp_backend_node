import CandidatoDAO from "../../DAOs/CandidatoDAO";
import { PostCandidato } from "../../types/contract/candidatos";
import {Candidato} from "../../types/entities/Candidato";



export default async function postCandidatoService(candidato: PostCandidato): Promise<Candidato>{

    let nuevoCandidato = await CandidatoDAO.crearCandidato(candidato);

    return nuevoCandidato;
}