// Styles
import { Container, Section, DetailsWrapper, TripData, CandidatesWrapper, Candidates, TitleAndButtonBox, ButtonsBox, PrimaryInfo, Title, ProfileWrapper, Name, Age, Profession, Country, ApplicationText, Icons, CheckIcon, CloseIcon } from './style'


import { useParams } from 'react-router'
import { BASE_URL } from '../../constants/urls'
import { useContext } from 'react'
import { AdminContext } from '../../contexts/AdminContext'
import { useRequestData } from '../../hooks/useRequestData'
import { useProtectedPage } from "../../hooks/useProtectedPage"

// Components
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button'


export function TripDetails() {

    useProtectedPage()

    let params = useParams()

    const { token } = useContext(AdminContext)

    const tripDetail = useRequestData(`${BASE_URL}`, 'get', `/trip/${params.id}`, '', `${token}`)

    const { candidates, approved } = tripDetail

    return (
        <Container>
            <Header buttonText='Voltar' route='/admin'/>
            <Section>
                <DetailsWrapper>
                    <TripData>
                        <CandidatesWrapper>
                            <TitleAndButtonBox>
                                <Title>Candidatos</Title>
                                <ButtonsBox>
                                    <Button size='150px' text='Deletar Viagem' margin='0 10px 0 0'/>
                                    <Button size='150px' text='Aprovados'/>
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
                                                <CheckIcon/>
                                                <CloseIcon/>
                                            </Icons>
                                            <ApplicationText>{applicationText}</ApplicationText>
                                        </ProfileWrapper>
                                    )
                                })}
                            </Candidates>
                        </CandidatesWrapper>
                        {/* <Approved>
                            <Title>Aprovados</Title>
                        </Approved> */}
                    </TripData>
                </DetailsWrapper>
            </Section>
            <Footer/>
        </Container>
    )
}