let objetos = {
    navName: prompt('Qual o nome da nave?'),
    typeOfNav: prompt('Qual o tipo da nave?'),
    maxOfVelocity: prompt('Qual a velocidade maxima que a nave pode atingir?'),
    velocity: 0
}

while(objetos.velocity<objetos.maxOfVelocity){
      let chosenOption = prompt('1- Deseja acelerar a nave?\n' +
                                '2- Deseja parar a nave?')
    
    
    if(chosenOption == 1){
    let newVelocity = parseInt(prompt('Para qual velocidade você deseja ir?'))
    objetos.velocity += newVelocity
    if(objetos.velocity >= objetos.maxOfVelocity){
        alert(`VOCÊ ULTRAPASSOU A VELOCIDADE PERMITIDA
               Velocidade atual:${objetos.velocity}
               Velocidade máxima da nave:${objetos.maxOfVelocity}`)
        } else {
            alert(`Sua velocidade agora é de ${objetos.velocity}`)
        }
    } else if(chosenOption == 2){
    alert(`Nome da nave: ${objetos.navName}\n`+
            `Tipo da nave: ${objetos.typeOfNav}\n`+
            `A nave estava a: ${objetos.velocity} km/s\n`+
            `Máxima da nave: ${objetos.maxOfVelocity} km/s`)
            break
    } else {
        alert('Escolha uma opção válida!!')
    }

}
