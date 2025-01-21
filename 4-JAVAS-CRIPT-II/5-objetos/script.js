// Criação de Objetos
// Objeto Literal:

const pessoa = {
    nome: "João",
    idade: 30,
    saudacao: function() {
        return `Olá, meu nome é ${this.nome}`;
    }
};

// Usando o new Object():
const objeto = new Object();
objeto.chave = "valor";

// Acessando Propriedades
// Notação de Ponto:
console.log(pessoa.nome); // "João"

// Notação de Colchetes:
console.log(pessoa["idade"]); // 30