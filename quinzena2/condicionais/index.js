// Exercícios de interpretação de código

// Ex - 1

    // a

        // O código testa se o número dividido por 2 é dá resto 0, se for, imprime no console "Passou no teste." caso contrário imprime "Não passou no teste.".
    
    // b

        // Números pares
    
    // c

        // Números ímpares
    
    // d

// Ex - 2

    // a

        // O código retorna no console o preço e o nome da fruta que consta dentro da condicional switch.

    // b

        // O preço da fruta Maça é R$2.25

    // c

        // O preço da Pêra é R$5

// Ex - 3

    // a

        // A primeira linha armazena o que foi inserido no imput convertendo-o para Numeber.

    // b

        // Será impresso "Esse número passou no teste", mas se o número digitado fosse -10, a mensagem citada anteriormente não seria exibida

    // c

        // Sim, como a variável 'mensagem' foi definida no escopo da condição if, a mensagem só seria exibida se o console.log estivesse dentro das chaves da condição if.

// Exercícios de escrita de código

// Ex - 1 

    const canDrive = (userAge) => {
        if (userAge >= 18) {
            console.log('Você pode dirigir.')
        } else {
            console.log('Você não pode dirigir.')
        }
    }

    const userAge = Number(prompt('Insira a sua idade:'))
    canDrive(userAge)

// Ex - 2

    const bestRegards = (userShift) => {
        if (userShift === 'M') {
            console.log('Bom Dia!')
        } else if (userShift === 'V') {
            console.log('Boa Tarde!')
        } else {
            console.log('Boa Noite!')
        }
    }

    const userShift = prompt('Insira o turno em que estuda: (M, V ou N)')
    bestRegards(userShift) 

// Ex - 3

    const userShift2 = prompt('Insira o turno em que estuda: (M, V ou N)')
    switch (userShift2) {
        case 'M':
            console.log('Bom Dia!')
            break;
        case 'V':
            console.log('Boa Tarde!')
            break
        case 'N':
            console.log('Boa Noite!')
            break
        default:
            console.log('Insira apenas (M, V ou N).')
            break;
    }

// Ex - 4

    const verificationMovie = (movieGenre, moviePrice) => {
        if (movieGenre === 'FANTASIA' && moviePrice < 15) {
            console.log('Bom filme!')
        } else {
            console.log('Escolha outro filme :(')
        }
    }

    const movieGenre = prompt('Insira o gênero do filme:').toUpperCase()
    const moviePrice = Number(prompt('Insira o valor do ingresso:'))
    verificationMovie(movieGenre, moviePrice) 

// DESAFIOS

// Ex - 1 

    const verificationMovie2 = (movieGenre2, moviePrice2) => { 
        if (movieGenre2 === 'FANTASIA' && moviePrice2 < 15) {
            const userSnacks = prompt('Qual lanchinho irá comprar?')
            console.log(`Bom filme!`)
            console.log(`Aproveite sua ${userSnacks}.`)
        } else {
            console.log('Escolha outro filme :(')
        }
    }

    const movieGenre2 = prompt('Insira o gênero do filme:').toUpperCase()
    const moviePrice2 = Number(prompt('Insira o valor do ingresso:'))
    verificationMovie2(movieGenre2, moviePrice2) 

// Ex - 2

    const houseGameSf = (gameType, gameStage, numberOfTickets, category) => {
        let allValues = []
    
        if (gameType === 'DO' && gameStage === 'SF' && category === 1){
            allValues[0] = 1320
            allValues[1] = (allValues[0] * numberOfTickets)
            return allValues

        } else if (gameType === 'DO' && gameStage === 'SF' && category === 2) {
            allValues[0] = 880
            allValues[1] = (allValues[0] * numberOfTickets)
            return allValues
        } else if (gameType === 'DO' && gameStage === 'SF' && category === 3) {
            allValues[0] = 550
            allValues[1] = (allValues[0] * numberOfTickets)
            return allValues
        } else if (gameType === 'DO' && gameStage === 'SF' && category === 4){
            allValues[0] = 220
            allValues[1] = (allValues[0] * numberOfTickets)
            return allValues
        } else {
            alert('Erro nas informações, preencha novamente.')
        }
    }

    const houseGameDt = (gameType, gameStage, numberOfTickets, category) => {
        let allValuesDt = []
    
        if (gameType === 'DO' && gameStage === 'DT' && category === 1) {
            allValuesDt[0] = 600
            allValuesDt[1] = (allValuesDt[0] * numberOfTickets)
            return allValuesDt

        } else if (gameType === 'DO' && gameStage === 'DT' && category === 2) {
            allValuesDt[0] = 440
            allValuesDt[1] = (allValuesDt[0] * numberOfTickets)
            return allValuesDt
        } else if (gameType === 'DO' && gameStage === 'DT' && category === 3) {
            allValuesDt[0] = 330
            allValuesDt[1] = (allValuesDt[0] * numberOfTickets)
            return allValuesDt
        } else if (gameType === 'DO' && gameStage === 'DT' && category === 4){
            allValuesDt[0] = 170
            allValuesDt[1] = (allValuesDt[0] * numberOfTickets)
            return allValuesDt
        } else {
            alert('Erro nas informações, preencha novamente.')
        }
    }

    const houseGameFi = (gameType, gameStage, numberOfTickets, category) => {
        let allValuesFi = []
    
        if (gameType === 'DO' && gameStage === 'FI' && category === 1) {
            allValuesFi[0] = 1980
            allValuesFi[1] = (allValuesFi[0] * numberOfTickets)
            return allValuesFi

        } else if (gameType === 'DO' && gameStage === 'FI' && category === 2) {
            allValuesFi[0] = 1320
            allValuesFi[1] = (allValuesFi[0] * numberOfTickets)
            return allValuesFi
        } else if (gameType === 'DO' && gameStage === 'FI' && category === 3) {
            allValuesFi[0] = 880
            allValuesFi[1] = (allValuesFi[0] * numberOfTickets)
            return allValuesFi
        } else if (gameType === 'DO' && gameStage === 'FI' && category === 4){
            allValuesFi[0] = 330
            allValuesFi[1] = (allValuesFi[0] * numberOfTickets)
            return allValuesFi
        } else {
            alert('Erro nas informações, preencha novamente.')
        }
    }

    const internationalGameSf = (gameType, gameStage, numberOfTickets, category) => {
        let allValuesInGamesSf = []
    
        if (gameType === 'IN' && gameStage === 'SF' && category === 1) {
            allValuesInGamesSf[0] = 1320 / 4.10
            allValuesInGamesSf[1] = (allValuesInGamesSf[0] * numberOfTickets)
            return allValuesInGamesSf

        } else if (gameType === 'IN' && gameStage === 'SF' && category === 2) {
            allValuesInGamesSf[0] = 880 / 4.10
            allValuesInGamesSf[1] = (allValuesInGamesSf[0] * numberOfTickets)
            return allValuesInGamesSf

        } else if (gameType === 'IN' && gameStage === 'SF' && category === 3) {
            allValuesInGamesSf[0] = 550 / 4.10
            allValuesInGamesSf[1] = (allValuesInGamesSf[0] * numberOfTickets)
            return allValuesInGamesSf

        } else if (gameType === 'IN' && gameStage === 'SF' && category === 4){
            allValuesInGamesSf[0] = 220 / 4.10
            allValuesInGamesSf[1] = (allValuesInGamesSf[0] * numberOfTickets)
            return allValuesInGamesSf
        } else {
            alert('Erro nas informações, preencha novamente.')
        }
    }

    const internationalGameDt = (gameType, gameStage, numberOfTickets, category) => {
        let allValuesInGamesDt = []
    
        if (gameType === 'IN' && gameStage === 'DT' && category === 1) {
            allValuesInGamesDt[0] = 600 / 4.10
            allValuesInGamesDt[1] = (allValuesInGamesDt[0] * numberOfTickets)
            return allValuesInGamesDt

        } else if (gameType === 'IN' && gameStage === 'DT' && category === 2) {
            allValuesInGamesDt[0] = 440 / 4.10
            allValuesInGamesDt[1] = (allValuesInGamesDt[0] * numberOfTickets)
            return allValuesInGamesDt
        } else if (gameType === 'IN' && gameStage === 'DT' && category === 3) {
            allValuesInGamesDt[0] = 330 / 4.10
            allValuesInGamesDt[1] = (allValuesInGamesDt[0] * numberOfTickets)
            return allValuesInGamesDt
        } else if (gameType === 'IN' && gameStage === 'DT' && category === 4){
            allValuesInGamesDt[0] = 170 / 4.10
            allValuesInGamesDt[1] = (allValuesInGamesDt[0] * numberOfTickets)
            return allValuesInGamesDt
        } else {
            alert('Erro nas informações, preencha novamente.')
        }
    }

    const internationalGameFi = (gameType, gameStage, numberOfTickets, category) => {
        let allValuesInGamesFi = []
    
        if (gameType === 'IN' && gameStage === 'FI' && category === 1) {
            allValuesInGamesFi[0] = 1980 / 4.10
            allValuesInGamesFi[1] = (allValuesInGamesFi[0] * numberOfTickets)
            return allValuesInGamesFi

        } else if (gameType === 'IN' && gameStage === 'FI' && category === 2) {
            allValuesInGamesFi[0] = 1320 / 4.10
            allValuesInGamesFi[1] = (allValuesInGamesFi[0] * numberOfTickets)
            return allValuesInGamesFi
        } else if (gameType === 'IN' && gameStage === 'FI' && category === 3) {
            allValuesInGamesFi[0] = 880 / 4.10
            allValuesInGamesFi[1] = (allValuesInGamesFi[0] * numberOfTickets)
            return allValuesInGamesFi
        } else if (gameType === 'IN' && gameStage === 'FI' && category === 4){
            allValuesInGamesFi[0] = 330 / 4.10
            allValuesInGamesFi[1] = (allValuesInGamesFi[0] * numberOfTickets)
            return allValuesInGamesFi
        } else {
            alert('Erro nas informações, preencha novamente.')
        }
    }

    let randomPerson = {
        fullName: prompt('Digite seu nome completo:'),
        gameType: prompt('Digite o tipo de jogo [IN ou DO]:'),
        gameStage: prompt('Insira a etapa do jogo [SF, DT ou FI]:'),
        category: Number(prompt('Insira a categoria [1, 2, 3 ou 4]:')),
        numberOfTickets: Number(prompt('Insira a quantidade de ingressos:'))
    }

    console.log('---Dados da compra---')
    console.log(`Nome do cliente: ${randomPerson.fullName}`)
    console.log(`Tipo do jogo: ${randomPerson.gameType}`)
    console.log(`Etapa do jogo: ${randomPerson.gameStage}`)
    console.log(`Categoria: ${randomPerson.category}`)
    console.log(`Quantidade de Ingressos: ${randomPerson.numberOfTickets}`)
    console.log('---Valores---')
    
   if (randomPerson.gameType === 'DO' && randomPerson.gameStage === 'SF') {
        const allValues = houseGameSf(randomPerson.gameType, randomPerson.gameStage, randomPerson.numberOfTickets, randomPerson.category)
        console.log(`Valor do ingresso: R$ ${allValues[0]}`)
        console.log(`Valor total: R$ ${allValues[1]}`)

    } else if (randomPerson.gameType === 'DO' && randomPerson.gameStage === 'DT'){
        const allValuesDt = houseGameDt(randomPerson.gameType, randomPerson.gameStage, randomPerson.numberOfTickets, randomPerson.category)
        console.log(`Valor do ingresso: R$ ${allValuesDt[0]}`)
        console.log(`Valor total: R$ ${allValuesDt[1]}`)

    } else if (randomPerson.gameType === 'DO' && randomPerson.gameStage === 'FI') {
        const allValuesFi = houseGameFi(randomPerson.gameType, randomPerson.gameStage, randomPerson.numberOfTickets, randomPerson.category)
        console.log(`Valor do ingresso: R$ ${allValuesFi[0]}`)
        console.log(`Valor total: R$ ${allValuesFi[1]}`)

    } else if (randomPerson.gameType === 'IN' && randomPerson.gameStage === 'SF') {
        const allValuesInGamesSf = internationalGameSf(randomPerson.gameType, randomPerson.gameStage, randomPerson.numberOfTickets, randomPerson.category)
        console.log(`Valor do ingresso: US$ ${allValuesInGamesSf[0]}`)
        console.log(`Valor total: US$ ${allValuesInGamesSf[1]}`)

    } else if (randomPerson.gameType === 'IN' && randomPerson.gameStage === 'DT') {
        const allValuesInGamesDt = internationalGameDt(randomPerson.gameType, randomPerson.gameStage, randomPerson.numberOfTickets, randomPerson.category)
        console.log(`Valor do ingresso: US$ ${allValuesInGamesDt[0]}`)
        console.log(`Valor total: US$ ${allValuesInGamesDt[1]}`)

    } else if (randomPerson.gameType === 'IN' && randomPerson.gameStage === 'FI') {
        const allValuesInGamesFi = internationalGameFi(randomPerson.gameType, randomPerson.gameStage, randomPerson.numberOfTickets, randomPerson.category)
        console.log(`Valor do ingresso: US$ ${allValuesInGamesFi[0]}`)
        console.log(`Valor total: US$ ${allValuesInGamesFi[1]}`)
    }


    
