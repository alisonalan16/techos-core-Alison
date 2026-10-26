import { GerenciadorOS } from '../models/GerenciadorOS.js';
import { UsuarioFactory } from '../models/UsuarioFactory.js';

export class OrdemServicoController {
    constructor() {
        this.gerenciadorOS = new GerenciadorOS();
    }

    processarSubmissao(tipo, dadosUsuario, descricaoOS) {
        console.log("[CONTROLLER] Evento submit capturado com sucesso.");
        
        // Aciona a Factory para criar o utilizador
        const usuario = UsuarioFactory.criarUsuario(tipo, dadosUsuario);
        
        const novaOS = {
            id: Date.now(),
            usuario: usuario,
            descricao: descricaoOS,
            status: 'ABERTA'
        };

        // Salva no Singleton
        this.gerenciadorOS.adicionarOS(novaOS);
        console.log("[VIEW] Tabela de OS atualizada dinamicamente com Flexbox/Grid.");
        
        return novaOS;
    }

    listarChamados() {
        return this.gerenciadorOS.listarOS();
    }
}