
export interface CandidatoEntityDTO {
    nombre: string,
    email: string,
    telefono: string,
    skills: string[],
    experiencia: number,
    educacion: string,
    estado: string, //esto se agrega en el service
    urLinkedin: string,
    experiencia1: string,
    experiencia2: string
}