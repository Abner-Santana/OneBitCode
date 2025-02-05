//High Order Function são funcoes que recebem outras fuções como argumento 

// Não usamos os () ao lado do nome da função, porque ao fazer isso estaríamos executando a função

function calcular(a, b, operacao) {
    const resultado = operacao(a, b)
    return resultado
}

function somar(x, y) {
    return x + y
}

console.log(calcular(1, 2, somar))


// Essas funções que são passadas como parâmetros geralmente são chamadas de callbacks
// Um exemplo comum de high-order function no javascript é a função .forEach() dos arrays
function exibirElemento(elemento, indice, array) {
    console.log({
        elemento,
        indice,
        array
    })
}

const lista = ["Maçã", "Banana", "Laranja", "Limão", "Uva"]

// Forma tradicional
for (let i = 0; i < lista.length; i++) {
    exibirElemento(lista[i], i, lista)
}

// Forma funcional
lista.forEach(exibirElemento)

// Também poderia ser feito:
lista.forEach(function (elemento, indice, array) {
    console.log({
        elemento,
        indice,
        array
    })
})
