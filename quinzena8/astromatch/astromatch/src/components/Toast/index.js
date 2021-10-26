import { useContext } from 'react'
import {ProfileContext} from '../../contexts/ProfileContext'
import { Container, Wrapper, Message } from './style'

export function Toast() {

    const { toast } = useContext(ProfileContext)

    return (
        <Container>
            {toast === 1 ?
                <Wrapper toast={toast}>
                    <Message>Oh não! Erro em nossos servidores...</Message>
                </Wrapper>
            : 
            toast === 2 ? 
                <Wrapper toast={toast}>
                    <Message>Uhull, Você tem um novo match</Message>
                </Wrapper>
            : 
            toast === 3 ?
                <Wrapper toast={toast}>
                    <Message>Matches e Swipes resetados!</Message>
                </Wrapper>
            :null}
        </Container>
    )
}