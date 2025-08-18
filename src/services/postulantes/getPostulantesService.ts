import PostulanteDAO from "../../DAOs/postulanteDAO";
import Postulante from "../../types/entities/Postulante";



export default async function getPostulantesService(): Promise<Postulante[]>{

    let arrPostulantes = await PostulanteDAO.getPostulantes();

    return arrPostulantes;
}