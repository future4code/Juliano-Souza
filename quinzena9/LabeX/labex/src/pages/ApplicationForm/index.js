import { useParams } from 'react-router'
import { useContext } from 'react'
import { PublicContext } from '../../contexts/PublicContext'
import { applyToTrip } from '../../services/requests'

// Styles 
import { Container, Section, FormWrapper, Title, InputBox, Input, Label } from './style'

// Components
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Select } from '../../components/Select'

export function ApplicationForm() {

    let params = useParams()

    const { formValues, setFormValues } = useContext(PublicContext)

    return (
        <Container>
            <Header buttonText='Voltar' route='/trips/list'/>
            <Section>
                <FormWrapper onSubmit={(e) => applyToTrip(e, params, formValues, setFormValues)}>
                    <Title>Finalize seu Cadastro</Title>
                    <InputBox>
                        <Label>Nome</Label>
                        <Input type='text' value={formValues.name} onChange={(e) => setFormValues({...formValues, name: e.target.value})} placeholder='Digite seu nome' required></Input>
                        <Label>Idade</Label>
                        <Input type='text' value={formValues.age} onChange={(e) => setFormValues({...formValues, age: e.target.value})} placeholder='Digite sua idade' required></Input>
                        <Label>Por quê está se cadastrando?</Label>
                        <Input type='text' value={formValues.applicationText} onChange={(e) => setFormValues({...formValues, applicationText: e.target.value})} placeholder='Por quê está se cadastrando?' required></Input>
                        <Label>Sua profissão</Label>
                        <Input type='text' value={formValues.profession} onChange={(e) => setFormValues({...formValues, profession: e.target.value})} placeholder='Digite sua profissão' required></Input>
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

