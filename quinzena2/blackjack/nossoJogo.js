   const userGame = (userCard, userCard2) => {
   const userScore = userCard.valor + userCard2.valor 
   console.log(`Usuário - cartas: ${userCard.texto}, ${userCard2.texto} - pontuação ${userScore} `)
   return userScore
   
}

   const computerGame = (computerCard, computerCard2) => {
   const computerScore = computerCard.valor + computerCard2.valor 
   console.log(`Computador - cartas: ${computerCard.texto}, ${computerCard2.texto} - pontuação ${computerScore} `)
   return computerScore
}

   const comparingWinner = (userScore, computerScore) => {
   if (userScore > computerScore) {
      console.log('O usuário ganhou!')
   } else if (userScore < computerScore) {
      console.log('O computador ganhou!')
   } else {
      console.log('Empate!')
   }
}

console.log('Bem vindo ao jogo de Blackjack!')
if (confirm('Quer iniciar uma nova rodada?')) {
   console.log('O jogo vai começar!')
   const userCard = comprarCarta()
   const userCard2 = comprarCarta()
   const computerCard = comprarCarta()
   const computerCard2 = comprarCarta()
   const userScore = userGame(userCard, userCard2)
   const computerScore = computerGame(computerCard, computerCard2)
   comparingWinner(userScore, computerScore)
   
}  else {
   console.log('O jogo acabou')
}