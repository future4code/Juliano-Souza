import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 50vw;
    height: 30vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    /* background-color: tomato; */
    margin: auto;
`

export class FimFormulario extends React.Component {
    render() {
        return (
            <Container>
                <h2>O FORMULÁRIO ACABOU</h2>
                <p>Muito obrigado por participar! Entraremos em contato!</p>
            </Container>
        )
    }
}