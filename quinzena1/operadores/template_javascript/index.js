// Exercícios de interpretação de código

/* 
    Ex 1

        1.1 - false
        1.2 - false
        1.3 - true
        1.4 - boolean
    
        
    Ex 2    

        2.1 - Sim, pois a caixa de diálogo prompt() irá armazenar um valor do tipo string e o nosso colega não utilizou a função Number() para converter o tipo atual para Number.

        2.2 - O sinal de + também tem o efeito de concatenação. E como nosso colega não transformou os valores de string para number o JS apenas juntou as duas strings.

    Ex 3

        3.1 - Eu sugiria ao colega a converter os tipos dos valores recebidos utilizando a função Number(). No caso ficaria assim:

        let primeiroNumero = Number(prompt("Digite um numero!"))
        let segundoNumero = Number(prompt("Digite outro numero!"))
*/

// Exercícios de escrita de código

    // Ex - 1

        // a

        const userAge = Number(prompt('Qual é a sua idade?'))

        // b
    
        const userFriendAge = Number(prompt('Qual é a idade do seu melhor amigo(a)?'))

        const ageComparison = userAge > userFriendAge
        const ageDifference = userAge - userFriendAge

        // c

        console.log('Sua idade é maior do que a do seu melhor amigo(a)?', ageComparison)

        // d

        console.log('A diferença de idade é de:', ageDifference,'anos.')

    // Ex - 2

        // a

            let number = Number(prompt('Digite um número par:'))

        // b

            const restDivision = number %2
            console.log(restDivision)

        // c / d - Números pares tem resto 0 e impares tem resto 1

    // Ex - 3

            let anyAge = Number(prompt('Qual é a sua idade em anos?'))

            const ageMonths = anyAge * 12
            const ageDays = anyAge * 365
            const ageHours = ageDays * 24

        // a
        
            console.log('Sua idade em meses é:', ageMonths)

        // b

            console.log('Sua idade em dias é:', ageDays)

        // c

            console.log('Sua idade em horas é:', ageHours)

    // Ex - 4

        const firstNumber = Number(prompt('Digite um número:'))
        const secondNumber = Number(prompt('Digite mais um número:'))

        const higherNumber = firstNumber > secondNumber
        const equalNumbers = firstNumber === secondNumber
        const firstDivision = firstNumber % secondNumber === 0
        const secondDivision = secondNumber % firstNumber === 0


        console.log('O primeiro numero é maior que segundo?', higherNumber)
        console.log('O primeiro numero é igual ao segundo?', equalNumbers)
        console.log('O primeiro numero é divisível pelo segundo?', firstDivision)
        console.log('O segundo numero é divisível pelo primeiro?', secondDivision)

// DESAFIO

    // Ex - 1

        // a

            const degreesUserF = 77
            const degreesFToKelvin = (degreesUserF - 32)*(5/9) + 273.15
            console.log('A temperatura digitada em Fahrenheit(°F) convertida em Kelvin(K) é:',degreesFToKelvin)

        // b

            let degreesUserC = 80
            let degreesCToFahrenheit = (degreesUserC)*(9/5) + 32
            console.log('A temperatura digitada em Celsius(°C) convertida em Fahrenheit(°F) é:',degreesCToFahrenheit)

        // c

            degreesUserC = 30
            degreesCToFahrenheit = (degreesUserC)*(9/5) + 32
            let degreesCToKelvin = degreesUserC + 273.15
            console.log('A temperatura digitada em Celsius(°C) convertida em Fahrenheit(°F) é:',degreesCToFahrenheit,'e convertida em Kelvin(K) é:',degreesCToKelvin)

        // d

            degreesUserC = Number(prompt('Digite uma temperatura em graus Celsius(°C):'))
            degreesCToFahrenheit = (degreesUserC)*(9/5) + 32
            degreesCToKelvin = degreesUserC + 273.15
            console.log('A temperatura digitada em Celsius(°C) convertida em Fahrenheit(°F) é:',degreesCToFahrenheit,'e convertida em Kelvin(K) é:',degreesCToKelvin)

    // Ex - 2

            const quilowattHour = 0.05

        // a

            let residenceExpense = 280*quilowattHour
            console.log(residenceExpense = 280*quilowattHour)

        // b
            
            residenceDiscount = residenceExpense - residenceExpense * 0.15
            console.log(residenceDiscount)

    // Ex - 3

        // a

            let converterLbToKg = 20 / 2.205
            console.log('20lb equivalem a',converterLbToKg,'kg')

        // b

            let converterOzToKg = 10.5 / 3.527
            console.log('10.5oz equivalem a',converterOzToKg,'kg')

        // c

            let converterMiToM = 100 * 1609
            console.log('100mi equivalem a',converterMiToM,'m')

        // d

            let converterFtToM = 50 / 3.281
            console.log('50ft equivalem a',converterFtToM,'m')

        // e

            let converterGalToL = 103.56 * 455
            console.log('103.56gal equivalem a',converterGalToL,'l' )

        // f

            let converterXicToL = 450 / 3.52
            console.log('450 xic equivalem a',converterXicToL,'l')

        // g
            
            measureUser = Number(prompt('Digite um valor em xícara (xic):'))
            converterXicToL = measureUser / 3.52
            console.log(measureUser,'xic equivalem a',converterXicToL,'l')
