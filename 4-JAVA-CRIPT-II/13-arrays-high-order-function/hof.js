const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]

// Map - mapeia elementos de um array que cria um novo array

//Maneira tradicional
// const nome = []
// for (let i = 0; i < personagens.length; i++) {
//     nome.push(personagens[i].nome)
// }

const nome = personagens.map(function (personagem) {
    return personagem.nome
})

console.log(nome)

// Filter
//Maneira Tradicional 
// const raca = []
// for (let i = 0; i < personagens.length; i++) {
//     if(personagens[i].raca == 'Orc'){
//         raca.push(personagens[i])
//     }
// }

const orcs = personagens.filter(function (personagem) {
    return personagem.raca == 'Orc'
})

console.log(orcs)


// Reduce
const nivelTotal = personagens.reduce(function (valorAcumulado, personagem) {
    return valorAcumulado + personagem.nivel
}, 0)

console.log(nivelTotal)

const racas = personagens.reduce(function (acumulador, personagem) {
    if (acumulador[personagem.raca]) {
        acumulador[personagem.raca].push(personagem)
    } else {
        acumulador[personagem.raca] = [personagem]
    }
    return acumulador
}, {})

console.log(racas)

// sort: ordena os elementos de um array a partir de comparações entre duplas de elementos
const personagemOrdenados = personagens.slice().sort(function (a, b) {
    return a.nivel - b.nivel
})

console.log(personagemOrdenados)