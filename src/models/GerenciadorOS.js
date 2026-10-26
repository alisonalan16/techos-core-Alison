export class GerenciadorOS {
    constructor() {
        if (GerenciadorOS.instance) {
            return GerenciadorOS.instance;
        }
        this.ordensServico = [];
        GerenciadorOS.instance = this;
        console.log("[SINGLETON] GerenciadorOS inicializado.");
    }

    adicionarOS(os) {
        this.ordensServico.push(os);
    }

    listarOS() {
        return this.ordensServico;
    }
}