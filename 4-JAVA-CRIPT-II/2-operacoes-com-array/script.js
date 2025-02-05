const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(arr)

// --- Adicionar Elementos --- 
//.push (final) (retorna o novo tamanho do array)
let tamanho = arr.push('Boromir')
console.log(arr)
console.log(tamanho)

//unshift (começo) (retorna o novo tamanho do array)
tamanho = arr.unshift('Teste')
console.log(arr)
console.log(tamanho)

// --- Remover Elementos ---
//pop (remove e pega o último elemento)
let ultimoElemento = arr.pop()
console.log(arr)
console.log(ultimoElemento)

//shift (começo) (remove e pega o primeiro elemento)
ultimoElemento = arr.shift()
console.log(arr)
console.log(ultimoElemento)

// --- Pesquisar por um Elemento ---
//includes (pesquisa pelo nome e retorna verdadeiro ou falso)
const inclui = arr.includes('Sam')
console.log(inclui)

//indexOf (pesquisa pelo nome e retorna o indice)
const indece = arr.indexOf('Sam')
console.log(indece)

// --- Cortar e Concatenar ---
//slice (retorna um novo array cortado)
const hobbits = arr.slice(0 , 4) //pega o 0,1,2,3
const outros = arr.slice(-4)
console.log(hobbits)
console.log(outros)

//concat
const sociedade = hobbits.concat(outros, 'concat')
console.log(sociedade)

// --- Substituição dos Elementos 
//splice
const elementoRemovidos = sociedade.splice(1, 1, 'splice') 
console.log(sociedade)
console.log(elementoRemovidos)

// --- Iterando sobre os Elementos ---
// Usando o for para percorrer cada elemento do array
for (let indice = 0; indice < sociedade.length; indice++) {
  const elemento = sociedade[indice]
  console.log(elemento + " se encontra na posição " + indice)
}