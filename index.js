// --- PADRÃO SINGLETON: GerenciadorOS ---
class GerenciadorOS {
    constructor() {
        if (GerenciadorOS.instance) {
            return GerenciadorOS.instance;
        }
        this.ordensServico = [];
        GerenciadorOS.instance = this;
        console.log("[SINGLETON] Instância única do GerenciadorOS inicializada.");
    }

    adicionarOS(os) {
        this.ordensServico.push(os);
    }

    listarOS() {
        return this.ordensServico;
    }
}

// --- POO: Classes Base e Subclasses ---
class Usuario {
    constructor(id, nome, email) {
        if (this.constructor === Usuario) {
            throw new Error("Classe abstrata 'Usuario' não pode ser instanciada diretamente.");
        }
        this.id = id;
        this.nome = nome;
        this.email = email;
    }
}

class Cliente extends Usuario {
    constructor(id, nome, email, telefone) {
        super(id, nome, email);
        this.telefone = telefone;
    }
}

class Tecnico extends Usuario {
    constructor(id, nome, email, especialidade) {
        super(id, nome, email);
        this.especialidade = especialidade;
    }
}

// --- PADRÃO FACTORY METHOD: UsuarioFactory ---
class UsuarioFactory {
    static criarUsuario(tipo, dados) {
        if (tipo === 'CLIENTE') {
            console.log(`[FACTORY] Criando Usuário Tipo: CLIENTE... -> Objeto 'Cliente' criado (ID: ${dados.id}, Nome: ${dados.nome}).`);
            return new Cliente(dados.id, dados.nome, dados.email, dados.telefone);
        } else if (tipo === 'TECNICO') {
            console.log(`[FACTORY] Criando Usuário Tipo: TECNICO... -> Objeto 'Tecnico' criado (ID: ${dados.id}, Nome: ${dados.nome}).`);
            return new Tecnico(dados.id, dados.nome, dados.email, dados.especialidade);
        }
        throw new Error("Tipo de usuário desconhecido.");
    }
}

// --- EXECUÇÃO DA APLICAÇÃO ---
const gerenciador = new GerenciadorOS();

const clienteAna = UsuarioFactory.criarUsuario('CLIENTE', { id: 101, nome: "Ana", email: "ana@email.com", telefone: "81999998888" });
const tecnicoCarlos = UsuarioFactory.criarUsuario('TECNICO', { id: 202, nome: "Carlos", email: "carlos@email.com", especialidade: "Hardware" });

const novaOS = {
    id: 1,
    cliente: clienteAna.nome,
    tecnico: tecnicoCarlos.nome,
    status: "ABERTA",
    descricao: "Troca de Tela"
};

gerenciador.adicionarOS(novaOS);
console.log("[SISTEMA] Ordem de Serviço #1 registrada com sucesso!");
console.log("[SISTEMA] Lista de OS ativas:");
console.log(JSON.stringify(gerenciador.listarOS(), null, 2));