// Sintaxe Básicas
const minhaFuncao = function (param1, param2) {
  return param1 + param2;
};

// Características Principais
// Sem nome: A função é atribuída a uma variável ou passada diretamente como argumento.
// Reutilização limitada: Usadas geralmente como funções únicas, não reutilizáveis.
// Flexibilidade: Excelente para callbacks e operações pontuais.

// Exemplos de Uso
//1. Atribuída a uma variável
const somar = function (a, b) {
  return a + b;
};
console.log(somar(2, 3)); // Output: 5

// 2. Em callbacks
setTimeout(function () {
  console.log("Olá, mundo!");
}, 1000);

// 3. Imediatamente Invocada (IIFE)
(function () {
  console.log("Executada imediatamente!");
})();

// 4. Em funções de array
const numeros = [1, 2, 3, 4];
const dobrados = numeros.map(function (numero) {
  return numero * 2;
});

console.log(dobrados); // Output: [2, 4, 6, 8]

// Diferenças em Relação a Funções Nomeadas
// Nomeada: Pode ser reutilizada pelo nome.
// Anônima: Normalmente usada no contexto onde é definida.
// Exemplo de função nomeada:
function somar1(a, b) {
  return a + b;
}
// Arrow Functions
// As funções anônimas também podem ser escritas usando a sintaxe de arrow functions, que são mais concisas:
const somar2 = (a, b) => a + b;
console.log(somar(5, 3)); // Output: 8