// Exercícios de interpretação de código

    // Ex - 1 

        // O código cria um loop que faz com que a variável 'valor' receba ela mesma mais o valor do índice até que o índice seja menor que 5.

    // Ex - 2

        // a

            // O código passa por todos os elementos do array e caso encontre algum valor maior que 18, este é impresso no console.

        // b

            // Acredito que não, poderia ser utilizado junto com o for...of o método indexOf
        
    // Ex - 3

        // O for está aninhado ao while.
        // O while cria serve para imprimir no console a linha.
        // Já o for, é ele quem faz com que a variável linha receba o '*' a cada loop de acordo com o número que o usuário digita no prompt.

// Exercícios de escrita de código

    // Ex - 1 

        const savePetName = (petAmount) => {
            let petName = []
            if (petAmount === 0) {
                console.log('Que pena! Você pode adotar um pet!')
            } else if (petAmount > 0) {
                while (petAmount > 0) {
                    petName.push(prompt('Digite o nome do seu pet'))
                    petAmount--
                }
            }
            return petName
        } 

        const petAmount = (prompt('Quantos bichinhos de estimação você tem?'))
        const personPets = savePetName(petAmount)

        console.log(personPets)

    // Ex - 2

        // a 

            const arrayOriginal = [12, 4, 12, 26, 7, 3, 18, 5]

            const showArray = () => {
                for (let i of arrayOriginal) {
                    console.log(i)
                }
            }

            showArray(arrayOriginal)

        // b 

            const divideArray = () => {
                for (let i of arrayOriginal) {
                    console.log(i/10)
                }
            }

            divideArray(arrayOriginal)

        // c

            const evenArray = () => {
                let newArray = []
                for (let i of arrayOriginal) {
                    if (i % 2 === 0) {
                        newArray.push(i)
                    }
                }
                console.log(newArray)
            }

            evenArray(arrayOriginal)

        // d 

            const wordWithArray = () => {
                for (let i = 0; i < arrayOriginal.length; i++) {
                    console.log(`O elemento do índex ${i} é ${arrayOriginal[i]}`)
                }
            }

            wordWithArray(arrayOriginal)

        // e

            const biggerAndSmaller = () => {
                let biggerNumber = 0
                let smallerNumber = arrayOriginal[0]
                for (let i = 0; i < arrayOriginal.length; i++) {
                    if (arrayOriginal[i] > biggerNumber) {
                        biggerNumber = arrayOriginal[i]
                    }
                    if (arrayOriginal[i] < smallerNumber) {
                        smallerNumber = arrayOriginal[i]
                    }
                }
                console.log(`O maior número do array é ${biggerNumber}`)
                console.log(`O menor número do array é ${smallerNumber}`)
            }

            biggerAndSmaller(arrayOriginal)

    // DESAFIO

        // EX - 1

            // a
            
            console.log('Vamos jogar!')
            let i = 0
            let numberPlayerOne = prompt('Digite um número')
            let numberPlayerTwo = Number(prompt('Adivinhe o número que estou pensando...'))
            while (numberPlayerTwo !== numberPlayerOne) {
                console.log(`O número chutado foi: ${numberPlayerTwo}`)
                if (numberPlayerTwo < numberPlayerOne) {
                    console.log('Errrrrrrrou, é maior')
                    numberPlayerTwo = prompt('Adivinhe o número que estou pensando...')
                } else if (numberPlayerTwo > numberPlayerOne) {
                    console.log('Errrrrrrrou, é menor')
                    numberPlayerTwo = prompt('Adivinhe o número que estou pensando...')
                } 
                i++
            }

            if (numberPlayerTwo === numberPlayerOne) {
                    console.log(`Acertou!!`)
                }

            
            console.log(`O número de tentativas foi: ${i}`)

            // b 

            console.log('Vamos jogar!')
            let index = 0
            let numberComputer = Math.floor(Math.random() * 101)
            let numberPlayerTwo2 = prompt('Adivinhe o número que estou pensando...')

            while (Number(numberPlayerTwo2) !== numberComputer && numberPlayerTwo2 !== null) {
                index++
                console.log(`O número chutado foi: ${Number(numberPlayerTwo2)}`)
                if (Number(numberPlayerTwo2) < numberComputer) {
                    console.log('Errrrrrrrou, é maior')
                    numberPlayerTwo2 = prompt('Adivinhe o número que estou pensando...')
                } else if (Number(numberPlayerTwo2) > numberComputer) {
                    console.log('Errrrrrrrou, é menor')
                    numberPlayerTwo2 = prompt('Adivinhe o número que estou pensando...')
                } 
            }

            if (Number(numberPlayerTwo2) === numberComputer) {
                console.log('Acertou!!')
            }

            console.log(`O número de tentativas foi: ${index}`)

    // Momento reflexão kkkkkkkkkk

        /*
        
        Não foi tão dificil realizar essa alteração pois usei como base o exercício anterior. 
        O comando que utilizei eu não o conhecia, li o artigo no MDN e ví alguns vídeos no Youtube para entender o funcionamento do método. Achei bem interessante!
        Ainda há alguns bugs no meu código que sei que poderiam ser melhorados mas isso vai me demandar tempo e algumas boas pesquisas hahaha! Mas está funcionando bem, mais pra frente irei melhora-lo.

        É muito interessante como tudo se conecta, usando um poquinho tudo que já vimos.
        Eu imagino o JavaScript como um jogo de lego onde você encaixa uma peça em outra, pega outra peça e encaixa de uma outra forma e tudo dá certo no final.
        
        Estou adorando demais a linguagem <3
        
        
        
        */