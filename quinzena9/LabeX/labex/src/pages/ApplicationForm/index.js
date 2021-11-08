// Styles 
import { Container, Section, FormWrapper, Title, InputBox, Input } from './style'

// Components
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { SelectComponent } from '../../components/SelectComponent'

export function ApplicationForm() {
    return (
        <Container>
            <Header buttonText='Voltar' route='/trips/list'/>
            <Section>
                <FormWrapper>
                    <Title>Escolha sua Viagem</Title>
                    <InputBox>
                        <Input type='text' placeholder='Digite seu nome' required></Input>
                        <Input type='text' placeholder='Digite sua idade' required></Input>
                        <Input type='text' placeholder='Por quê está se cadastrando?' required></Input>
                        <Input type='text' placeholder='Digite sua profissão' required></Input>
                        <SelectComponent/>
                    </InputBox>
                    <Button text='Concluir' size='100%' type='submit' />
                </FormWrapper>
            </Section>
            <Footer/>
        </Container>
    )
}