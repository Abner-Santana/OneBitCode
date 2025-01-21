// Do-While é parecido com o While, porém ele garante que o bloco será executado pelo menos uma vez, até mesmo a condição se a condição seja falsa
// No do-while a primeira verificação da condição só acontece depois que o bloco foi executado uma vez

 let velocidade = 0
 do{
    velocidade -= 10
    alert('Velocidade atual: ' + velocidade)
 }while(velocidade > 0)