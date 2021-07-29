// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  let randomHeight = Number(prompt('Digite uma altura qualquer:'))
  let randomWidth = Number(prompt('Digite uma largura qualquer:'))

  console.log(randomHeight * randomWidth)
}

// Exercício 2
function imprimeIdade() {
  let currentYear = Number(prompt('Digite o ano atual:'))
  let userYearOfBirth = Number(prompt('Digite o ano em que você nasceu:'))

  console.log(currentYear - userYearOfBirth)
}

// Exercício 3
function calculaIMC() {
  let userWeight = Number(prompt('Digite o seu peso (em Kg):'))
  let userHeight = Number(prompt('Digite sua altura (em Metro):'))

  console.log(userWeight / userHeight**2)
}

// Exercício 4
function imprimeInformacoesUsuario() {
  let userName = prompt('Qual seu nome?')
  let userAge = prompt('Qual sua idade?')
  let userEmail = prompt('Qual o seu e-mail?')

  console.log(`Meu nome é ${userName}, tenho ${userAge} anos, e o meu email é ${userEmail}.`)
}

// Exercício 5
function imprimeTresCoresFavoritas() {
 let firstColor = prompt('Digite aqui uma cor:')
 let secondColor = prompt('Digite uma segunda cor:')
 let thirdColor = prompt('Digite uma terceira cor:')

 let favoriteColors = [firstColor, secondColor, thirdColor]
 
 console.log(favoriteColors)
}

// Exercício 6
function retornaStringEmMaiuscula() {
  let randomText = prompt('Digite um texto qualquer:')

  console.log(randomText.toUpperCase())
}

// Exercício 7
function calculaIngressosEspetaculo() {
  let showCost = Number(prompt('Digite o custo do espetáculo:'))
  let ticketPrice = Number(prompt('Digite o valor do ingresso:'))

  console.log(showCost / ticketPrice)
}

// Exercício 8
function checaStringsMesmoTamanho() {
  let palavraUm = prompt('Digite uma palavra qualquer:')
  let palavraDois = prompt('Digite uma segunda palavra:')

  console.log(palavraUm.length === palavraDois.length)
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  let randomText = prompt('Digite uma palavra qualquer:')
  let secondRandomText = prompt('Digite uma segunda palavra:')

  console.log(randomText.toLowerCase() === secondRandomText.toLowerCase())
}

// Exercício 10
function checaRenovacaoRG() {
  let currentYear = Number(prompt('Digite o ano atual:'))
  let userYearOfBirth = Number(prompt('Digite seu ano de nascimento:'))
  let dateOfDispatch = Number(prompt('Digite a data de expedição do seu RG:'))

  let userAge = currentYear - userYearOfBirth
  let documentValidity = currentYear - dateOfDispatch

  console.log(userAge <= 20 && documentValidity >= 5 || userAge <= 50 && documentValidity >= 10 || userAge > 50 && documentValidity >= 15)

}

// Exercício 11
function checaAnoBissexto() {
  let randomYear = Number(prompt('Digite um ano qualquer:'))

  let divideBy4 = randomYear % 4
  let divideBy100 = randomYear % 100
  let divideBy400 = randomYear % 400

  console.log(divideBy4 === 0 && divideBy100 != 0 || divideBy400 == 0)

}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  let userAge = prompt('Você tem mais de 18 anos?').toLowerCase()
  let userScholarity = prompt('Você possui ensino médio completo?').toLowerCase()
  let userAvailability = prompt('Você possui disponibilidade exclusiva durante os horários do curso?').toLowerCase()
  
  console.log(userAge === 'sim' && userScholarity === 'sim' && userAvailability ==='sim')

}