const n = prompt('Digite seu nome: ')
let cont = 0
let city = ''

let p1 = window.prompt('Já visitou alguma cidade? [s][n]')
while(p1 !== 'n'){
    let p2 = window.prompt('Qual o nome da cidade?')
    city += ' - ' + p2
    cont++
    p1 = window.prompt('Já visitou alguma cidade? [s][n]')
}

alert(
    'Nome: ' + n + '\n Cidades: ' + city + '\n Quantidade: ' + cont
)