import { useParams } from 'react-router'

// Styles 
import { Container, Section, FormWrapper, Title, InputBox, Input, Label } from './style'

// Components
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Select } from '../../components/Select'

export function ApplicationForm() {

    let params = useParams()

    return (
        <Container>
            <Header buttonText='Voltar' route='/trips/list'/>
            <Section>
                <FormWrapper>
                    <Title>Finalize seu Cadastro</Title>
                    <InputBox>
                        <Label>Nome</Label>
                        <Input type='text' placeholder='Digite seu nome' required></Input>
                        <Label>Idade</Label>
                        <Input type='text' placeholder='Digite sua idade' required></Input>
                        <Label>Por quê está se cadastrando?</Label>
                        <Input type='text' placeholder='Por quê está se cadastrando?' required></Input>
                        <Label>Sua profissão</Label>
                        <Input type='text' placeholder='Digite sua profissão' required></Input>
                        <Label>País</Label>
                        <Select/>
                        <Label>Viagem</Label>
                        <Input value={params.trip_name} readonly disabled></Input>
                    </InputBox>
                    <Button text='Concluir' size='100%' type='submit' />
                </FormWrapper>
            </Section>
            <Footer/>
        </Container>
    )
}

