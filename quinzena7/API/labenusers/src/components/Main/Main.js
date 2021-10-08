import React, { useState} from "react";
import styled from "styled-components"
import Button from "./CheckRegisterUsersButton"
import axios from "axios"

const Container = styled.main`
    width: 40%;
    height: 70vh;
    /* border: 2px solid darkblue; */
    margin: 15px auto;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    background-color: #1D1E22;
    border-radius: 10px;
`
const Title = styled.h2`
    font-size: 2em;
    color: #FFFF;
    margin-bottom: 25px;
`
const InputName = styled.input`
    border-radius: 6px 6px 0 0;
    height: 40px;
    width: 60%;
    padding: .5em .5em;
    font-size: 1em;
    background-color: #2F3137;
    outline: none;
    border: none;
    color: #FFF;
    margin-bottom: 3px;
    &:focus {
        border: 1.5px solid #FFFfff30;
    }
`
const InputEmail = styled(InputName)`
    margin-bottom: 30px;
    border-radius: 0 0 6px 6px;
`
const CreateUserBtn = styled.button`
    height: 40px;
    width: 60%;
    padding: .6em 0;
    font-family: 'Montserrat', sans-serif;
    background-color: #413EF7;
    outline: none;
    border: none;
    border-radius: 6px 6px 0 0;
    color: #FFF;
    font-weight: 500;
    cursor: pointer;
    transition: 200ms linear;
    &:hover {
        opacity: 0.9;
    }
`

// Javascript

function Main({handleScreen}) {

    const [inputName, setInputName] = useState('')
    const [inputEmail, setInputEmail] = useState('')

    const registerUser = async () => {
        const createUser = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
        const authKEY = { headers: {Authorization: 'juliano-banu'} }
        const body = {name: inputName, email: inputEmail}
        await axios.post(createUser, body, authKEY).then(res => alert('Usuário cadastrado com sucesso!')).catch(rej => alert('Ops... Algo errado ao cadastrar!'))
        
        setInputName('')
        setInputEmail('')
    }

    return (
        <>
            <Container>
                <Title>Registrar Usuário</Title>
                <InputName
                    placeholder={'Nome'}
                    value={inputName}
                    onChange={(event) => setInputName(event.target.value)}
                />
                <InputEmail
                    placeholder={'E-mail'}
                    value={inputEmail}
                    onChange={(event) => setInputEmail(event.target.value)}
                />
                <CreateUserBtn
                    onClick={registerUser}
                >
                    Registrar
                </CreateUserBtn>
                <Button
                    handleScreen={handleScreen}
                />
            </Container>
        </>
    )
}

export default Main