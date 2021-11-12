import { useProtectedPage } from "../../hooks/useProtectedPage"
import { BASE_URL } from '../../constants/urls'
import { useRequestData } from '../../hooks/useRequestData'
import { useContext, useRef } from 'react'

// Styles
import { Container, Section, AdminWrapper, PlanetCardsView, InfoTitle, LeftArrow, RightArrow, TripInfoBox, LinkRouter, ArrowLeftBox, ArrowRigthBox, RouteLink, MenuIcon, ButtonBox, CardSection, ButtonAdminSection, LoaderWrapper } from './style'

// Components
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { CardPlanet } from "../../components/CardPlanet"
import { FunctionsButton } from "../../components/FunctionsButton"
import { Loader } from '../../components/Loader'

// Contexts
import { AdminContext } from '../../contexts/AdminContext'

export function AdminHome() {

    const carousel = useRef(null)

    const carouselRightClick = () => {
        carousel.current.scrollLeft += carousel.current.offsetWidth
    }

    const carouselLeftClick = () => {
        carousel.current.scrollLeft -= carousel.current.offsetWidth
    }

    useProtectedPage()

    const { menuIsOpen, setMenuIsOpen, loading } = useContext(AdminContext)

    const trips = useRequestData(BASE_URL, 'get', '/trips')

    return (
        <Container>
            <Header buttonText='Home' route='/'/>
            <Section>
                <AdminWrapper>
                    <TripInfoBox>
                        <InfoTitle>Viagens</InfoTitle>
                        <ButtonBox menuOpen={menuIsOpen.tripDetails}>
                            <RouteLink to='/admin/create_new_trip'>
                                <FunctionsButton text='Nova viagem'/>
                            </RouteLink>
                        </ButtonBox>
                        <MenuIcon onClick={() => setMenuIsOpen({...menuIsOpen, tripDetails: !menuIsOpen.tripDetails})} menuOpen={menuIsOpen.tripDetails}/>
                    </TripInfoBox>
                    <ArrowLeftBox menuOpen={menuIsOpen.tripDetails} onClick={carouselLeftClick}><LeftArrow/></ArrowLeftBox>
                    {loading ? 
                        <LoaderWrapper>
                            <Loader/>
                        </LoaderWrapper>
                        :
                        menuIsOpen.tripDetails ? 
                            <CardSection>
                                <PlanetCardsView ref={carousel}>
                                    {trips && trips.map(trip => {
                                        return (
                                            <LinkRouter to={`/admin/trip_details/${trip.id}`} key={trip.id}>
                                                <CardPlanet trip={trip}/>
                                            </LinkRouter>
                                        )
                                    })}
                                </PlanetCardsView>
                            </CardSection>
                        :
                            <ButtonAdminSection>
                                <RouteLink to='/admin/create_new_trip'>
                                    <FunctionsButton text='Nova viagem'/>
                                </RouteLink>
                            </ButtonAdminSection>}
                    <ArrowRigthBox menuOpen={menuIsOpen.tripDetails} onClick={carouselRightClick}><RightArrow/></ArrowRigthBox>
                </AdminWrapper>
            </Section>
            <Footer/>
        </Container>
    )
}