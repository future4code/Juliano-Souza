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

export class Etapa2 extends React.Component {

    render() {
        return (
            <Container>
                <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
                <p>5. Qual curso?</p>
                <input></input>
                <p>6. Qual a unidade de ensino?</p>
                <input></input>
                <button onClick={this.props.setEtapa3}>Próxima Etapa</button>
            </Container>
        )
    }
}