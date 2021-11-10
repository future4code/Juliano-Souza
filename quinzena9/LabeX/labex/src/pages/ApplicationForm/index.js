import { useContext } from 'react'
import { PublicContext } from '../../contexts/PublicContext'
import { applyToTrip } from '../../services/requests'
import { getCountryURL } from '../../constants/urls'
import { useRequestData } from "../../hooks/useRequestData";
import { BASE_URL } from '../../constants/urls'

// Styles 
import { Container, Section, FormWrapper, Title, InputBox, Input, Label } from './style'

// Components
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Select } from '../../components/Select'


export function ApplicationForm() {

    // Hooks

    const countries = useRequestData(getCountryURL, 'get')

    const trips = useRequestData(BASE_URL, 'get', '/trips')

    // Context

    const { formValues, setFormValues, tripId } = useContext(PublicContext)


    return (
        <Container>
            <Header buttonText='Voltar' route='/trips/list'/>
            <Section>
                <FormWrapper onSubmit={(e) => applyToTrip(e, tripId, formValues, setFormValues)}>
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
                        <Select 
                            state={formValues}
                            stateKey={'country'}
                            stateFunc={setFormValues}
                            placeholderText={'Escolha seu País'}
                            arrItems={countries}
                            reqKeyName={'nome'}
                        />
                        <Label>Viagem</Label>
                        <Select 
                            placeholderText={'Escolha a viagem'}
                            arrItems={trips}
                            reqKeyName={'name'}
                        />
                    </InputBox>
                    <Button text='Concluir' size='100%' type='submit' />
                </FormWrapper>
            </Section>
            <Footer/>
        </Container>
    )
}

