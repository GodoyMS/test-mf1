import {Modulo, ResponseAPI} from "../entities/index";

export interface ModuloRepository {
    getModuloById(id: string): Promise<ResponseAPI<Modulo>>;
}