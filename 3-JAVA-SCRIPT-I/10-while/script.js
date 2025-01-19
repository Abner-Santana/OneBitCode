let velocidade = 80

while(velocidade >= 0){
    console.log('Velocidade' + velocidade)
    velocidade -= 10

    if(velocidade <= 10){
        console.log('Velocidade mínima')
        break
    }
}