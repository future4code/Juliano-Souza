// Styles
import { Container, Section, CandidatesWrapper, Candidates, TitleAndButtonBox, ButtonsBox, PrimaryInfo, Title, ProfileWrapper, Name, Age, Profession, Country, ApplicationText, Icons, CheckIcon, CloseIcon } from './style'


import { useParams } from 'react-router'
import { BASE_URL } from '../../constants/urls'
import { useContext } from 'react'
import { AdminContext } from '../../contexts/AdminContext'
import { useRequestData } from '../../hooks/useRequestData'
import { useProtectedPage } from "../../hooks/useProtectedPage"
import { deleteTrip } from '../../services/requests'
import { decideCandidate } from '../../services/requests'
import { useNavigate } from 'react-router'

// Components
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button'


export function TripDetails() {

    useProtectedPage()

    let params = useParams()
    let navigate = useNavigate()

    const { token } = useContext(AdminContext)

    const tripDetail = useRequestData(`${BASE_URL}`, 'get', `/trip/${params.id}`, '', `${token}`)

    const { candidates } = tripDetail

    return (
        <Container>
            <Header buttonText='Voltar' route='/admin'/>
            <Section>
                <CandidatesWrapper>
                    <TitleAndButtonBox>
                        <Title>Candidatos</Title>
                        <ButtonsBox>
                            <div onClick={() => deleteTrip(params.id, navigate)}>
                                <Button size='150px' text='Deletar Viagem' margin='0 10px 0 0' />
                            </div>
                            <Button size='150px' text='Aprovados' route={`/admin/trip_details/${params.id}/approved`}/>
                        </ButtonsBox>
                    </TitleAndButtonBox>
                    <Candidates>
                        {candidates?.map(candidate => {

                            let { id, name, age, profession, country, applicationText } = candidate

                            return (
                                <ProfileWrapper key={id}>
                                    <PrimaryInfo>
                                        <Name>{name}</Name>
                                        <Age>{age}</Age>
                                        <Profession>{profession}</Profession>
                                        <Country>{country}</Country>
                                    </PrimaryInfo>
                                    <Icons>
                                        <CheckIcon onClick={() => decideCandidate(params.id, id, {approve: true})}/>
                                        <CloseIcon onClick={() => decideCandidate(params.id, id, {approve: false})}/>
                                    </Icons>
                                    <ApplicationText>{applicationText}</ApplicationText>
                                </ProfileWrapper>
                            )
                        })}
                    </Candidates>
                </CandidatesWrapper>
            </Section>
            <Footer/>
        </Container>
    )
}