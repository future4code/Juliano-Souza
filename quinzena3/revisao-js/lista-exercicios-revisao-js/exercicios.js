// EXERCÍCIO 01
function inverteArray(array) {
  
  const convertArray = arr => {
    let invertedArray = []
    for (let i = arr.length - 1; i >= 0; i--) {
      invertedArray.push(arr[i])
    }
    return invertedArray
  }
  return convertArray(array)

}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  
  let raisingPairs = []
  const pairFilter = array => {
    for (const i of array) {
      if (i % 2 === 0)
        raisingPairs.push(i ** 2)
    }
    return raisingPairs
  }
  return raisingPairs = pairFilter(array)

}

// EXERCÍCIO 03
function retornaNumerosPares(array) {

  const verifyPair = array => {
    let pairNumbers = []
    for (const i of array) {
      if (i % 2 === 0) {
        pairNumbers.push(i)
      }
    }
    return pairNumbers
  }
  return pairNumbers = verifyPair(array)

}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {

  const verifyBiggerNumber = array => {
    let el = array[0]
    for (const i of array) {
      if (i > el) {
        el = i
      }
    }
    return el
  }
  return verifyBiggerNumber(array)

}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  
  const sizeOfArray = array => {
    return array.length
  }
  return sizeOfArray(array)

}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {

  const chekingBoolean = () => {
    const answers = [false, false, true, true, true]
    return answers
  }
  return chekingBoolean()

}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {

  const returnPair = n => {
    let i = 0
    let arr = []
    while (n > i) {
      arr.push(i * 2)
      i++
    }
    return arr
  }
  return returnPair(n)

}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  
  const identifyTriangle = (a, b, c) => {
    if (a === b && b === c) {
      return 'Equilátero'
    } else if (a === b || b === c) {
      return 'Isósceles'
    } else {
      return 'Escaleno'
    }
  }
  return identifyTriangle(a, b, c)

}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  
  const checkingNumbers = (num1, num2) => {
    let numbersData = {
      maiorNumero: 0,
      maiorDivisivelPorMenor: 0,
      diferenca: 0
    }

    let smallerNumber

    if (num1 > num2) {
      numbersData.maiorNumero = num1
    } else {
      numbersData.maiorNumero = num2
    }

    if (num1 < num2) {
      smallerNumber = num1
    } else {
      smallerNumber = num2
    }

    if (numbersData.maiorNumero % smallerNumber === 0 || numbersData.maiorNumero % smallerNumber === 1) {
      numbersData.maiorDivisivelPorMenor = true
    } else {
      numbersData.maiorDivisivelPorMenor = false
    }

    if (num1 - num2 >= 0) {
      numbersData.diferenca = num1 - num2
    } else {
      numbersData.diferenca = num2 - num1
    }
    return numbersData
  }
  return numbersData = checkingNumbers(num1, num2)

}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {

  const secBiggestAndSmaller = arr => {
    let secBiggestLog = []
    let secSmallerLog = []
    let secBiggest = 0
    let secSmaller = arr[arr.length - 1]
    let results = []

    for (const i of arr) {
      if (i > secBiggest) {
        secBiggestLog.push(i)
        secBiggest = i
      }
    }
    for (const i of arr) {
      if (i < secSmaller) {
        secSmallerLog.push(i)
        secSmaller = i
      }
    }
    if (secSmallerLog.length === 1) {
      for (const i of arr) {
        if (i <= secSmaller) {
          secSmallerLog.push(arr[1])
          secSmaller = i
        }
      }
      results.push(secBiggestLog[secBiggestLog.length - 2], secSmallerLog[secSmallerLog.length - 1])
    } else {
      results.push(secBiggestLog[secBiggestLog.length - 2], secSmallerLog[secSmallerLog.length - 2])
    }
    return results
  }
  return secBiggestAndSmaller(array)

}

// EXERCÍCIO 11
function ordenaArray(array) {

  const ascendingOrder = arr => {
    let support
    for (let index = 0; index < arr.length; index++) {
      for (let i = 0; i < arr.length - (index - 1); i++) {
        if (arr[i] > arr[i + 1]) {
          support = arr[i + 1]
          arr[i + 1] = arr[i]
          arr[i] = support
        }
      }
    }
    return arr
  }
  return ascendingArr = ascendingOrder(array)

}

// EXERCÍCIO 12
function filmeFavorito() {

  const personMovie = () => {
    let favoriteMovie = {
      nome: 'O Diabo Veste Prada',
      ano: 2006,
      diretor: 'David Frankel',
      atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci'],
    }
    return favoriteMovie
  }
  return personMovie()

}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
