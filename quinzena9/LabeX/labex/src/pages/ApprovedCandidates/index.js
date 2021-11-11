// Styles
import { Container, Section, CandidatesWrapper, Candidates, TitleAndButtonBox, ButtonBox, PrimaryInfo, Title, ProfileWrapper, Name, Age, Profession, Country, ApplicationText, LinkRouter, MenuIcon, ButtonAdminSection } from './style'


import { useParams } from 'react-router'
import { BASE_URL } from '../../constants/urls'
import { useContext } from 'react'
import { AdminContext } from '../../contexts/AdminContext'
import { useRequestData } from '../../hooks/useRequestData'
import { useProtectedPage } from "../../hooks/useProtectedPage"

// Components
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { FunctionsButton } from '../../components/FunctionsButton'

export function ApprovedCandidates() {

    useProtectedPage()

    let params = useParams()

    const { token, menuIsOpen, setMenuIsOpen } = useContext(AdminContext)

    const tripDetail = useRequestData(`${BASE_URL}`, 'get', `/trip/${params.id}`, '', `${token}`)

    const { approved } = tripDetail

    return (
        <Container>
            <Header buttonText='Voltar' route='/admin'/>
            <Section>
                <CandidatesWrapper>
                    <TitleAndButtonBox>
                        <Title>Aprovados</Title>
                        <ButtonBox menuOpen={menuIsOpen.approved}>
                            <LinkRouter to={`/admin/trip_details/${params.id}`}>
                                <FunctionsButton text='Candidatos'></FunctionsButton>
                            </LinkRouter>
                        </ButtonBox>
                        <MenuIcon onClick={() => setMenuIsOpen({...menuIsOpen, approved: !menuIsOpen.approved})} menuOpen={menuIsOpen.approved}/>
                    </TitleAndButtonBox>
                    {menuIsOpen.approved ? 
                        <Candidates>
                            {approved?.map(approvedCandidate => {

                                let { id, name, age, profession, country, applicationText } = approvedCandidate

                                return (
                                    <ProfileWrapper key={id}>
                                        <PrimaryInfo>
                                            <Name>{name}</Name>
                                            <Age>{age}</Age>
                                            <Profession>{profession}</Profession>
                                            <Country>{country}</Country>
                                        </PrimaryInfo>
                                        <ApplicationText>{applicationText}</ApplicationText>
                                    </ProfileWrapper>
                                )
                            })}
                        </Candidates>
                        :
                        <ButtonAdminSection>
                            <LinkRouter to={`/admin/trip_details/${params.id}`}>
                                <FunctionsButton text='Candidatos'></FunctionsButton>
                            </LinkRouter>
                        </ButtonAdminSection>}
                    </CandidatesWrapper>
            </Section>
            <Footer/>
        </Container>
    )
}