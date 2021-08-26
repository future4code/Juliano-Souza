```

// Com forOf

function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
    let occurrenceLog = []
    for (const i of arrayDeNumeros) {
        if (i === numeroEscolhido) {
            occurrenceLog.push(i)
        }
    }
    if (occurrenceLog.length > 0) {
        return `O número ${numeroEscolhido} aparece ${occurrenceLog.length}x`
    } else {
        return `Número não encontrado`
    }
}

// Com forEach

function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
    let occurrenceLog = []
    const apparitionsLog = arrayDeNumeros.forEach(value => {
        if (value === numeroEscolhido) {
            occurrenceLog.push(value)
        }
    })
    if (occurrenceLog.length > 0) {
        return `O número ${numeroEscolhido} aparece ${occurrenceLog.length}x`
    } else {
        return `Número não encontrado`
    }
}

// Com filter OK

function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
    const occurrenceLog = arrayDeNumeros.filter(value => value === numeroEscolhido)
    if (occurrenceLog.length > 0) {
        return `O número ${numeroEscolhido} aparece ${occurrenceLog.length}x`
    } else {
        return `Número não encontrado`
    }
}

```