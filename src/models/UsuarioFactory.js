import { Cliente } from './Cliente.js';
import { Tecnico } from './Tecnico.js';

export class UsuarioFactory {
    static criarUsuario(tipo, dados) {
        if (tipo === 'CLIENTE') {
            console.log(`[FACTORY] Criando Usuário Tipo: CLIENTE... -> Objeto 'Cliente' criado (ID: ${dados.id})`);
            return new Cliente(dados.id, dados.nome, dados.email, dados.telefone);
        } else if (tipo === 'TECNICO') {
            console.log(`[FACTORY] Criando Usuário Tipo: TECNICO... -> Objeto 'Tecnico' criado (ID: ${dados.id})`);
            return new Tecnico(dados.id, dados.nome, dados.email, dados.especialidade);
        }
        throw new Error("Tipo de usuário desconhecido.");
    }
}