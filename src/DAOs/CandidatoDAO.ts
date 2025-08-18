import { PostCandidato } from "../types/contract/candidatos";
import { Candidato } from "../types/entities/Candidato";




const PostulanteDAO = {
    
    async  getCandidatos(): Promise<Candidato[]> {

        try{
            // TO DO
            throw new Error("No implementado");
        }
        catch(e){
            throw e;
        }
    },

    async crearCandidato(candidato: PostCandidato): Promise<Candidato>{
         try{
            // TO DO
            throw new Error("No implementado");
        }
        catch(e){
            throw e;
        }
    }

}

export default PostulanteDAO;