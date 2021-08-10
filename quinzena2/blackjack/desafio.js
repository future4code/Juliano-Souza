   const userCardsDraw = () => {
      let userCards = []
      do {
         userCards[0] = comprarCarta()
         userCards[1] = (comprarCarta())
      } while (userCards[0].valor === 11 && userCards[1].valor === 11);

      return userCards
   }

   const userCards = userCardsDraw()

   const computerCardsDraw = () => {
      let computerCards = []
      do {
         computerCards[0] = comprarCarta()
         computerCards[1] = comprarCarta()
      } while (computerCards[0].valor === 11 && computerCards[1].valor === 11);

      return computerCards
   }
   const computerCards = computerCardsDraw()


   const allGame = (userCards, computerCards) => {
      let userScore = userCards[0].valor + userCards[1].valor
      let computerScore = computerCards[0].valor + computerCards[1].valor
      let guardaValores = []
      let guardaValoresComputer = []
      let newCard
      let newCardComputer
      guardaValoresComputer.push(computerCards[0].texto, computerCards[1].texto)
      guardaValores.push(userCards[0].texto, userCards[1].texto)
      console.log(`Suas cartas são ${userCards[0].texto} ${userCards[1].texto} - A carta revelada do computador é ${computerCards[0].texto} \n\nDeseja comprar mais uma carta?`)
      while (userConfirm = confirm('Deseja comprar mais uma carta?') === true && userScore < 21) {
         if (userConfirm) {
            newCard = comprarCarta()
            guardaValores.push(newCard.texto)
            userScore += newCard.valor
            let formattedTextUser = guardaValores.toString()
            console.log(`Suas cartas são ${formattedTextUser.replaceAll(',',' ')} - A carta revelada do computador é ${computerCards[0].texto} \n\n`)
         } else {
            let computerNewScore = computerCards[0].valor + computerCards[1].valor
            console.log(`Suas cartas são ${formattedTextUser.replaceAll(',',' ')} - Sua pontuação é ${userScore}\n\nAs cartas do computador são ${computerCards[0].texto} ${computerCards[1].texto} - A pontuação do computador é ${computerNewScore}`)
         }
      }

      while (computerScore < 21) {
         newCardComputer = comprarCarta()
         guardaValoresComputer.push(newCardComputer.texto)
         computerScore += newCardComputer.valor
         formattedTextUser = guardaValores.toString()
         let formattedTextComputer = guardaValoresComputer.toString()
         console.log(`Suas cartas são ${formattedTextUser.replaceAll(',',' ')} - Sua pontuação é ${userScore}\n\nAs cartas do computador são ${formattedTextComputer.replaceAll(',',' ')} - A pontuação do computador é ${computerScore}`)
      }

      if (userScore <= 21 && computerScore > 21) {
         console.log('O usuário ganhou!')
      } else if (computerScore <= 21 && userScore > 21) {
         console.log('O computador ganhou!')
      } else if (userScore > 21 && computerScore > 21) {
         console.log('Não houve ganhadores!')
      } else if (userScore > computerScore) {
         console.log('O usuário ganhou!')
      } else if (userScore < computerScore) {
         console.log('O computador ganhou!')
      } else if (userScore === computerScore) {
         console.log('Empate!')
      }
   }

   console.log('Bem vindo ao jogo de Blackjack!')
   if (confirm('Quer iniciar uma nova rodada?')) {
      userCardsDraw()
      computerCardsDraw()
      allGame(userCards, computerCards)
   } else {
      console.log('O jogo acabou!')
   }