import { Request, Response } from "express";
import postCandidatoService from "../../services/candidatos/postCandidatoService";




export async function postCandidatoController(req: Request, res: Response){

    //TODO: verificacion y mapeo
    // let postCandidato: PostCandidato = {
    //     nombre: req.body.nombre,

    // }

    console.log(req.body);

    // let nuevoCandidato = await postCandidatoService(req.body);

    //TODO: filtrar info que se mande al front

    // res.json(nuevoCandidato);
    res.send("ok")
}