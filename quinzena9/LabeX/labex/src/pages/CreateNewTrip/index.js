import { useProtectedPage } from "../../hooks/useProtectedPage"
import { useContext } from "react"
import { createTrip } from '../../services/requests'

// Styles 
import { Container, Section, FormWrapper, Title, InputBox, Input, Label } from './style'

// Components
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button'
import { AdminContext } from "../../contexts/AdminContext"

export function CreateNewTrip() {

    useProtectedPage()

    const { token, newTripValues, setNewTripValues } = useContext(AdminContext)

    return (
        <Container>
            <Header buttonText='Voltar' route='/admin'/>
            <Section>
                <FormWrapper onSubmit={(e) => createTrip(e, newTripValues, setNewTripValues)}>
                    <Title>Nova Viagem</Title>
                    <InputBox>
                        <Label>Nome</Label>
                        <Input 
                            type='text' value={newTripValues.name} 
                            onChange={(e) => {setNewTripValues({...newTripValues, name: e.target.value})}} 
                            placeholder='Digite o nome da viagem' 
                            required>
                        </Input>
                        <Label>Planeta</Label>
                        <Input 
                            type='text' value={newTripValues.planet} 
                            onChange={(e) => {setNewTripValues({...newTripValues, planet: e.target.value})}} 
                            placeholder='Digite o planeta' 
                            required>
                        </Input>
                        <Label>Data</Label>
                        <Input 
                            pattern='^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}'
                            title='Apenas datas no formato dd/mm/yyyy'
                            type='text' value={newTripValues.date} 
                            onChange={(e) => {setNewTripValues({...newTripValues, date: e.target.value})}} 
                            placeholder='Digite a data' 
                            required>
                        </Input>
                        <Label>Descrição</Label>
                        <Input 
                            type='text' value={newTripValues.description} 
                            onChange={(e) => {setNewTripValues({...newTripValues, description: e.target.value})}} 
                            placeholder='Descrição' 
                            required>
                        </Input>
                        <Label>Duração</Label>
                        <Input 
                            pattern='^[0-9]*'
                            title='Apenas números'
                            type='text' value={newTripValues.durationInDays} 
                            onChange={(e) => {setNewTripValues({...newTripValues, durationInDays: e.target.value})}} 
                            placeholder='Digite a duração' 
                            required>
                        </Input>
                    </InputBox>
                    <Button text='Criar Viagem' size='100%' type='submit' />
                </FormWrapper>
            </Section>
            <Footer/>
        </Container>
    )
}