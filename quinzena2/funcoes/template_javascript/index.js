// Exercícios de interpretação de código 

/* 

    Ex - 1

    a. Será impresso os valores 10 e 50

    b. A função seria executada normalmente, porém o resultado não seria impresso no console


    Ex - 2

    a. A função transforma o texto do usuário para letra minúscula e o método includes verifica se há o termo 'cenoura'.

    b.  true
        true
        true

*/

// Exercícios de escrita de código

// Ex - 1

    // a.

    function aboutMe() {
        console.log('Eu sou Juliano, tenho 20 anos, moro em Uberlândia e sou estudante na Labenu.')
    }

    aboutMe()

    // b.

    function sobreMim(name, age, city, profession) {
        city = 'Rua Antônio C. M. Ribeiro, 290'
        console.log(`Eu sou ${name}, tenho ${age} anos, moro em ${city} e sou ${profession}`)
    }

    sobreMim('Juliano', 20, 'Uberlândia', 'Aspirante a Dev')

// Ex - 2

    // a.

    const addingNumbers = (x, y) => {
        return console.log(`Soma: ${x + y}`)
    }

    addingNumbers(2, 3)

    // b. 

    const biggerOrSmaller = (x, y) => {
        return console.log(x >= y)
    }

    biggerOrSmaller(3, 1)

    // c.

    const evenOrOdd = (n) => {
        return console.log(n % 2 === 0)
    }

    evenOrOdd(19)

    // d.

    const transformingText = (text) => {
        return console.log(`O tamanho do texto inserido possui ${text.length} letras, e em maiúsculo fica ${text.toUpperCase()}.`)
    }

    transformingText('Labenu')

// Ex - 3

     let parameterOne = Number(prompt('Insira um número')) 
     let parameterTwo = Number(prompt('Insira um número novamente')) 

     console.log(`Números inseridos: ${parameterOne} e ${parameterTwo}`)

    const subtractingNumbers = (x, y) => {
        return console.log(`Diferença ${x - y}`)
    }

    const multiplyingNumber = (x, y) => {
        return console.log(`Multiplicação: ${x * y}`)
    }

    const dividingNumber = (x, y) => {
        return console.log(`Divisão: ${x / y}`)
    }

      addingNumbers(parameterOne, parameterTwo) // Como já havia criado a função anteriormente, resolvi invocar ela novamente
      subtractingNumbers(parameterOne, parameterTwo)
      multiplyingNumber(parameterOne, parameterTwo)
      dividingNumber(parameterOne, parameterTwo)
    
   
// DESAFIOS

    // 1.

    const arrowOne = (n) => {
        return n
    }

    console.log(arrowOne(1))

    const arrowTwo = (n, n1) => {
        let adding = n + n1
        console.log(arrowOne(adding))
    }

    arrowTwo(2, 4)

    // 2.

    const pythagoreanTheorem = (c1, c2) => {
        let res = c1**2 + c2**2
        let hypotenuse = Math.sqrt(res)
        return console.log(hypotenuse)
    }

    pythagoreanTheorem(6, 8)