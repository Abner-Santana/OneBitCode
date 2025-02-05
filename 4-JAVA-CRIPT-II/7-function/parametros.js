function dobro(x) {
    console.log('O dobro de ' + x + ' é ' + (x * 2))
}

dobro(4)

//Valores padrão para parametros, sempre no final
function padrao(a, b, c = 1) {
    console.log(a, b, c)
}

padrao(1, 2)

// Ao criarmos uma função com muitos parâmetros,
// uma boa prática é substituí-los por um objeto
function parametrosDoJeitoErrado(nome, telefone, endereco, aniversario, email, senha) {
    // ...
}
function parametrosDoJeitoCerto(usuario) {
    // ...
}
// Além de facilitar na chamada da função, a ordem dos parâmetros se torna irrelevante
parametrosDoJeitoErrado("nome", "telefone", "endereco", "aniversario", "email", "senha")
const dadosDoUsuario = {
    nome: "",
    telefone: "",
    email: "",
    senha: "",
    aniversario: "",
    endereco: ""
}
parametrosDoJeitoCerto(dadosDoUsuario)
