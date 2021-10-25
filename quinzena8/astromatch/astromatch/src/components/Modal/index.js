import { useContext } from 'react'
import {ProfileContext} from '../../contexts/ProfileContext'
import { Container, Wrapper, Message } from './style'

export function Modal() {

    const { modalAlert } = useContext(ProfileContext)

    return (
        <Container>
            {modalAlert === 1 ?
                <Wrapper modalAlert={modalAlert}>
                    <Message>Oh não! Erro em nossos servidores...</Message>
                </Wrapper>
            : 
            modalAlert === 2 ? 
                <Wrapper modalAlert={modalAlert}>
                    <Message>Uhull, Você tem um novo match</Message>
                </Wrapper>
            : null}
        </Container>
    )
}