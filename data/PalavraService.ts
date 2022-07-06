import api from "../presentation/service/api"
import { Palavra } from "./entities/Palavra"

export class PalavraService {
    create(subject: Palavra): Promise<any> {
      return api.post('/palavra/cadastrar', subject)
    }

    static async list(): Promise<Palavra[]> {
      return await api.get('/palavra/listar').then(response => response.data).catch(() => null);
    }
}
