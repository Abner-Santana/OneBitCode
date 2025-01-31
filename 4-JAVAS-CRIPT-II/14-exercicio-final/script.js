let op = null
let vagas = []

do {
    op = parseFloat(window.prompt(
        'SISTEMA GERENCIADOR DE VAGAS \n\n' +
        '[1] Listar vagas disponíveis \n' +
        '[2] Criar uma nova vaga \n' +
        '[3] Visualizar uma vaga \n' +
        '[4] Inscrever um candidato em uma vaga \n' +
        '[5] Excluir uma vaga \n' +
        '[6] Sair'))

    switch (op) {
        case 1:
            let listar = ''
            if (vagas.length > 0) {
                vagas.forEach(function (e, i) {
                    listar += 'Indice: ' + i + '\nVaga: ' + e.nome
                    if (e.candidatos) {
                        listar += '\nCandidatos: ' + e.candidatos + '\n'
                    } else {
                        listar += '\nCandidatos: ' + 0 + '\n\n'
                    }
                })
            } else {
                window.alert('Sem vagas cadastradas!')
            }
            window.alert(listar)
            break
        case 2:
            let vaga = {}
            vaga.nome = window.prompt('Nome')
            vaga.descricao = window.prompt('Descrição')

            let mes, dia
            mes = window.prompt('Mes')
            dia = window.prompt('Dia')
            let data = new Date('2025', mes, dia)
            vaga.dataLimite = data

            vagas.push(vaga)
            break
    }

} while (op !== 6)