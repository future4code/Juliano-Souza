// Exercícios de interpretação de código

    // Ex - 1

        /*

            a. undefined
            b. null
            c. 11
            d. 3
            e. 3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13
            f. 9
        
        
        */
        
    // Ex - 2

        // SUBI NUM ÔNIBUS EM MIRROCOS 27

// Exercícios de escrita de código

    // Ex - 1

        let userEmail = prompt('Qual é o seu e-mail?')
        let userName = prompt('Qual o seu nome?')

        console.log(`O e-mail ${userEmail} foi cadastrado com sucesso. Seja bem-vinda(o) ${userName}`)


    // Ex - 2

        favoriteFood = ['Strogonoff','Canellonni','Lasanha','Pizza','Pastel']

        // 2.1

            console.log(favoriteFood)

        // 2.1

            console.log('Essas são as minhas comidas preferidas:')
            console.log(favoriteFood[0])
            console.log(favoriteFood[1])
            console.log(favoriteFood[2])
            console.log(favoriteFood[3])
            console.log(favoriteFood[4])

        // 2.1

            favoriteFood[1] = prompt('Qual a sua comida favorita?')
            
            console.log(favoriteFood)

    // Ex - 3

        // 3.1 

            listaDeTarefas = []

        // 3.2

            let tasksUser = prompt('Digite uma tarefas que precise realizar no dia')
            listaDeTarefas.push(tasksUser)
            tasksUser = prompt('Digite uma tarefas que precise realizar no dia')
            listaDeTarefas.push(tasksUser)
            tasksUser = prompt('Digite uma tarefas que precise realizar no dia')
            listaDeTarefas.push(tasksUser)

        // 3.3

            console.log(listaDeTarefas)

        // 3.4

            let iUser = Number(prompt('Digite o índice da tarefa que já realizou: 0, 1 ou 2'))

        // 3.5 

            listaDeTarefas.splice(iUser, 1)

        // 3.6 

            console.log(listaDeTarefas)

    // DESAFIO

        // 1

            arrayTextUser = []
            arrayTextUser.push = prompt('Digite um texto qualquer:').split(' ')
            console.log(arrayTextUser)

        // 2

            arrayDesafio = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
            console.log(arrayDesafio.indexOf('Abacaxi'))
