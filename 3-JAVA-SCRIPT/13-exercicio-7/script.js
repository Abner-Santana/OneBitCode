// Exercício 7 - Menu interativo
let opcao = null

do {
    opcao = parseFloat(window.prompt(
        'Opcao[1] \nOpcao[2] \nOpcao[3] \nOpcao[4] \nOpcao[5] - Encerrar \n Escolha uma das opções: '))
} while (opcao !== 5)
    
alert('Encerrando sistema...')