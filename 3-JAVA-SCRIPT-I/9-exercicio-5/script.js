const metros = parseFloat(prompt(
        'Digite a medida em metros: \n'
))

const opcao = parseFloat(prompt(
    'As opções são: \n [1] - milímetro (mm) \n [2] - centímetro (cm) \n [3] - decímetro (dc) \n [4] - decametro (dam) \n [5] - hectometro (hm)\n [6] quilometro (km)'
))

switch(opcao){
    case (1):
        let milimetros = metros * 10 ** 3
        alert('Valor em milimetro: ' + milimetros)
        break
    case (2):
        let centímetro = metros * 10 ** 2
        alert('Valor em centímetro: ' + centímetro)
        break
    case (3):
        let decimetro = metros * 10 ** 1
        alert('Valor  em decímetro: ' + decimetro)
        break
    default:
        alert('Opcão incorreta!')
}