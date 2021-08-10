// Exercícios de interpretação de código

    // Ex - 1 

        // Será impresso no console o valor do elemento original do array, em segundo o índice atual que está sendo processado no array e em terceiro o array de origem.

    // Ex - 2 

        // Será impresso o valor da chave 'nome' de cada index do array original.

    // Ex - 3 

        // A função filter irá filtrar no objeto 'usuarios' os valores da chave 'apelido' que são diferentes de "Chijo". E os objetos que não possuem o apelido "Chijo" serão impressos no console.

// Exercícios de escrita de código

    // Ex - 1 


        const pets = [
            { nome: "Lupin", raca: "Salsicha"},
            { nome: "Polly", raca: "Lhasa Apso"},
            { nome: "Madame", raca: "Poodle"},
            { nome: "Quentinho", raca: "Salsicha"},
            { nome: "Fluffy", raca: "Poodle"},
            { nome: "Caramelo", raca: "Vira-lata"},
        ]

        // a 

            const onlyDogNames = pets.map(obj => obj.nome)
            console.log(onlyDogNames)

        // b

            const onlyDogSausage = pets.filter(obj => obj.raca === 'Salsicha')
            console.log(onlyDogSausage)

        // c

            const discountMessage = obj => {
                console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${obj.nome}`)
            }
            const discountForPoodle = pets.filter(obj => obj.raca === 'Poodle').map(discountMessage)

    // Ex - 2

        const produtos = [
            { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
            { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
            { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
            { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
            { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
            { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
            { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
            { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
            { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
            { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
        ]

        // a 

            const onlyProductsName = produtos.map(obj => obj.nome)
            console.log(onlyProductsName)

        // b

            const newPriceProducts = produtos.map(obj => {
                return (obj.preco - obj.preco * 0.05).toFixed(2)
            })
            console.log(newPriceProducts)

        // c 

            const onlyDrinksName = produtos.filter(obj => obj.categoria === 'Bebidas')
            console.log(onlyDrinksName)

        // d

            const ypeOnName = produtos.filter(obj => obj.nome.includes('Ypê'))
            console.log(ypeOnName)

        // e 

            const productsOffering = ypeOnName.map(obj => `Compre ${obj.nome} por ${obj.preco}`)
            console.log(productsOffering)