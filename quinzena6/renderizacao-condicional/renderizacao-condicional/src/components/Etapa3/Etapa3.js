import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 50vw;
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    /* background-color: tomato; */
    margin: auto;
`

export class Etapa3 extends React.Component {
    render() {
        return (
            <Container>
                <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
                <p>5. Por que você não terminou um curso de graduação?</p>
                <input></input>
                <p>6. Você fez algum curso complementar?</p>
                <select>
                    <option>Curso Técnico</option>
                    <option>Curso de Inglês</option>
                </select>
                <button onClick={this.props.setFimFormulario}>Próxima Etapa</button>
            </Container>
        )
    }
}