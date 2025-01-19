// Exercício 8 - Controle Financeiro
let renda = parseFloat(window.prompt(
    'Qual sua renda? '
))

let opcao = null

do{
    opcao = parseFloat(window.prompt(
        'Controle Financeiro \n\n'+'Adicionar[1] \n'+'Remover[2] \n'+'Sair[3] \n\nRenda atual '+'('+renda+')'
    ))

    let operacao = null

    switch(opcao){
        case 1:
            operacao = parseFloat(window.prompt('Digite o valor: '))
            renda += operacao
            break
        case 2:
            operacao = parseFloat(window.prompt('Digite o valor: '))
            renda -= operacao
            break
    }
}while(opcao !== 3)