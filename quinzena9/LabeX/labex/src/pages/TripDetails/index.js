// Styles
import { Container, Section, CandidatesWrapper, Candidates, TitleAndButtonBox, ButtonBox, ButtonsBox, PrimaryInfo, Title, ProfileWrapper, Name, Age, Profession, Country, ApplicationText, Icons, CheckIcon, CloseIcon, LinkRouter, MenuIcon, ButtonAdminSection, DeleteButton, LoaderWrapper } from './style'


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
import { FunctionsButton } from '../../components/FunctionsButton'
import { Loader } from '../../components/Loader'


export function TripDetails() {

    useProtectedPage()

    let params = useParams()
    let navigate = useNavigate()

    const { token,  menuIsOpen, setMenuIsOpen, loading } = useContext(AdminContext)

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
                            <ButtonBox onClick={() => deleteTrip(params.id, navigate)} menuOpen={menuIsOpen.candidates}>
                                <FunctionsButton text='Deletar Viagem'/>
                            </ButtonBox>
                            <ButtonBox menuOpen={menuIsOpen.candidates}>
                                <LinkRouter to={`/admin/trip_details/${params.id}/approved`}>
                                    <FunctionsButton text='Aprovados'/>
                                </LinkRouter>
                            </ButtonBox>
                            <MenuIcon onClick={() => setMenuIsOpen({...menuIsOpen, candidates: !menuIsOpen.candidates})} menuOpen={menuIsOpen.candidates}/>
                        </ButtonsBox>
                    </TitleAndButtonBox>
                    {loading ?
                        <LoaderWrapper><Loader/></LoaderWrapper>
                    :
                        menuIsOpen.candidates ? 
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
                        :
                        <ButtonAdminSection>
                            <DeleteButton onClick={() => deleteTrip(params.id, navigate)}>
                                <FunctionsButton text='Deletar Viagem'/>
                            </DeleteButton>
                            <LinkRouter to={`/admin/trip_details/${params.id}/approved`}>
                                <FunctionsButton text='Aprovados'/>
                            </LinkRouter>
                        </ButtonAdminSection>}
                </CandidatesWrapper>
            </Section>
            <Footer/>
        </Container>
    )
}