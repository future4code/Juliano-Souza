// Exercícios de interpretação de código 

/*
    Ex - 1

        // a 

            No primeiro console será impresso o índice 0 do array da chave elenco que tem o valor: Matheus Nachtergaele
            
            No segundo console será impresso o último índice do array da chave elenco que tem o valor: Virginia Cavendish

            No terceiro console será impresso o ultimo objeto do array {canal: "Globo", horario: "14h"}.


    Ex - 2

        // a 

            No primeiro cosole será impresso o objeto cachorro exibindo todas as chaves e seus respectivos valores.

            Já no segundo, o console imprime o objeto 'gato' que recebe uma cópia do objeto 'cachorro' e a chave 'nome' por já existir passa a ter o valor recebido por último, '

            No terceiro console, é impresso o objeto 'tartaruga' que recebe uma cópia do objeto 'gato' e o valor da chave 'nome' tem as suas letras 'a' trocadas por 'o'.

        // b

            Os três pontos realiza um cópia inteira de um objeto para outro.

    Ex - 3

        // a 

            A função imprime no console o valor da chave passada no segundo parâmetro.

        // b

            No primeiro console será impresso o valor da chave 'backender'
            
            No segundo console será impresso undefined já que a chave 'altura' não existe dentro do objeto.

*/

// Exercícios de escrita de código

    // Ex - 1 

        // a

            const randomPerson = {
                namePerson: 'Juliano',
                surnamePerson: ['Ju', 'Juju', 'Jujuba']
            }

            const makePhrase = (obj) => {
                return console.log(`Eu sou o ${obj.namePerson}, mas pode me chamar de: ${obj.surnamePerson[0]}, ${obj.surnamePerson[1]} ou ${obj.surnamePerson[2]}.`)
            }

            makePhrase(randomPerson)

        // b

            const randomPersonAgain = {
                ...randomPerson,
                surnamePerson: ['Juli', 'JJ', 'Jota']
            }

            makePhrase(randomPersonAgain)

    // Ex - 2

        // a

            const personOne = {
                namePerson: 'Karlos',
                age: 37,
                profession: 'Advogado'
            }


            const personTwo = {
                namePerson: 'Amanda',
                age: 23,
                profession: 'Enfermeira'
            }

        // b

            const returnInfo = (obj) => {
                let arrayInf = []
                arrayInf.push(obj.namePerson, obj.namePerson.length, obj.age, obj.profession, obj.profession.length)

                return console.log(arrayInf)

            }

            returnInfo(personOne)
            returnInfo(personTwo)

    // Ex - 3

        // a

            let carrinho = []

        // b

            const strawberry = {
                itemName: 'Morango',
                availability: true
            }


            const cherry = {
                itemName: 'Cereja',
                availability: true
            }


            const raspberry = {
                itemName: 'Framboesa',
                availability: true
            }

        // c

            const fruitMarket = (item) => {
                return carrinho.push(item)
            }

            fruitMarket(strawberry)
            fruitMarket(cherry)
            fruitMarket(raspberry)

        // d

            console.log(carrinho)

// DESAFIO

    // Ex - 1

        const askUser = () => {
            let userName = prompt('Digite seu nome:')
            let userAge = Number(prompt('Digite sua idade:'))
            let userProfession = prompt('Digite sua profissão:')

            let userData = {
                namePerson: userName,
                age: userAge,
                profession: userProfession
            }

            return console.log(userData, typeof userData)
        }

        askUser()

    // Ex - 2

        const movieOne = {

            filmName: 'Interestelar',
            releaseDate: 2014
        }

        const movieTwo = {
            filmName: 'Jack e a Mecânica do Coração',
            releaseDate: 2013
        }

        
        const movieComparison = (obj1, obj2) => {
            let movieInfo = []
            const releaseComparison = obj1.releaseDate < obj2.releaseDate
            const releaseEqual = obj1.releaseDate === obj2.releaseDate
    
            movieInfo.push(releaseComparison, releaseEqual)

            return movieInfo
        }

        const movieInfo = movieComparison(movieOne, movieTwo)
        
        console.log(`O primeiro filme foi lançado antes do segundo? ${movieInfo[0]}`)
        console.log(`O primeiro filme foi lançado no mesmo ano do segundo? ${movieInfo[1]}`)


    // Ex - 3

        const fruiSale = (obj) => {
            return obj = {
                ...obj,
                availability: false
            }
        }

        
        console.log(fruiSale(raspberry))