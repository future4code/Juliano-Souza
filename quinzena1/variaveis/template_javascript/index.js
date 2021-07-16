// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

/* Ex.1 - Será inpresso o número 10 e depois 10 e 5.

   Ex.2 - Serão impressos os números 10, 10 e 10.

   Ex.3 - Para p = horasTrab | Para t = ganhosDia  */


// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// Ex.1 -

    let umNome
    let umaIdade 

    console.log(typeof umNome)
    console.log(typeof umaIdade)

    // Foi impresso undefined pela falta de atribuição à variável.

    umNome = prompt('Qual seu nome?')
    umaIdade = prompt('Qual sua idade?')

    console.log(typeof umNome)
    console.log(typeof umaIdade)

    // Foi identificado o tipo String

    console.log('Olá', umNome ,', você tem', umaIdade, ' anos') 

// Ex.2 -

    let qualPosicao = prompt('Está deitado?')
    let estFome = prompt('Está com fome?')
    let banhoHoje = prompt('Já tomou banho hoje?')

    console.log('Está deitado?',qualPosicao)
    console.log('Está com fome?', estFome)
    console.log('Já tomou banho hoje?', banhoHoje) 

// Ex.3

    let a = 10
    let b = 25 
    let c

    c = a
    a = b
    b = c

    console.log("O novo valor de a é", a)
    console.log("O novo valor de b é", b)

// DESAFIO

    let priNum = Number(prompt('Digite um número:'))
    let segNum = Number(prompt('Digite mais um número:'))

    console.log('O primeiro número somado ao segundo número resulta em:',priNum + segNum)
    console.log('O primeiro número multiplicado pelo segundo número resulta em:',priNum * segNum)