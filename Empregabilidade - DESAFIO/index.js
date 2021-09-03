// DESAFIO - 1

let A = 10
let B = 20
let C

C = A
A = B
B = C

console.log(A, B)

// DESAFIO - 2

const userNumber = num => {
    return num -1
}

console.log(userNumber(12))

// DESAFIO - 3

const daysAlreadyLived = (userYearOld, userMonthOld, userDaysOld) => {
    return userYearOld * 365 + userMonthOld * 30 + userDaysOld
}

console.log(daysAlreadyLived(20, 6, 1))

// DESAFIO - 4

const moreThanTen = num => {
    if (num > 10) {
        return `É maior que 10`
    }
    return `Não é maior que 10`
}

console.log(moreThanTen(12))

// DESAFIO - 5

const applePriceCalc = (num) => {
    if (num < 12) {
        return (num * 1.30).toFixed(2)
    }
    return num
}

console.log(applePriceCalc(11))
