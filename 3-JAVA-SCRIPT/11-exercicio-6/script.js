const n = prompt('Digite seu nome: ')
let i = 1
let cont = 0
let city = ''

while(i > 0){
    let p1 = prompt('Visitou alguma cidade? [S][N]')
    if(p1 == 'N' || p1 == 'n'){
        i = 0
    }else{
        let p2 = prompt('Qual o nome da cidade?')
        cont++
        city = city + ' / ' + p2
    }
}

alert(
    n + '\n' + cont + '\n' + city
)