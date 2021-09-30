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

export class Etapa1 extends React.Component {

    state = {
        scholarity: '',
        personName: '',
        personAge: '',
        personEmail: ''
    }

    getPersonName = (event) => {
        this.setState({personName: event.target.value})
    }

    getPersonAge = (event) => {
        this.setState({personAge: event.target.value})
    }

    getPersonEmail = (event) => {
        this.setState({personEmail: event.target.value})
    }

    setScholarity = (event) => {
        this.setState({scholarity: event.target.value})
    }

    checkScholarity = () => {

        if (this.state.scholarity === 'E.S.I' || this.state.scholarity === 'E.S.C') {
            return this.props.setEtapa2
        } else {
            return this.props.setEtapa3
        }
    }

    render() {
        return (
            <Container>
                <h2>ETAPA 1 - DADOS GERAIS</h2>
                <p>1. Qual o seu nome?</p>
                <input value={this.state.personName} onChange={this.getPersonName}></input>
                <p>2. Qual sua idade?</p>
                <input value={this.state.personAge} onChange={this.getPersonAge}></input>
                <p>3. Qual seu email?</p>
                <input value={this.state.personEmail} onChange={this.getPersonEmail}></input>
                <p>4. Qual a sua escolaridade?</p>
                <select onChange={this.setScholarity}>
                    <option value='E.M.I'>Ensino Médio Incompleto</option>
                    <option value='E.M.C'>Ensino Médio Completo</option>
                    <option value='E.S.I'>Ensino Superior Incompleto</option>
                    <option value='E.S.C'>Ensino Superior Completo</option>
                </select>
                <button onClick={this.checkScholarity()}>Próxima Etapa</button>
            </Container>
        )
    }
}