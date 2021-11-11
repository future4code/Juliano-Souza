import { useProtectedPage } from "../../hooks/useProtectedPage"
import { BASE_URL } from '../../constants/urls'
import { useRequestData } from '../../hooks/useRequestData'
import { useRef } from 'react'

// Styles
import { Container, Section, AdminWrapper, PlanetCardsView, InfoTitle, LeftArrow, RightArrow, TripInfoBox, LinkRouter, ArrowLeftBox, ArrowRigthBox, RouteLink, MenuIcon, ButtonBox } from './style'

// Components
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { CardPlanet } from "../../components/CardPlanet"
import { FunctionsButton } from "../../components/FunctionsButton"

export function AdminHome() {

    const carousel = useRef(null)

    const carouselRightClick = () => {
        carousel.current.scrollLeft += carousel.current.offsetWidth
    }

    const carouselLeftClick = () => {
        carousel.current.scrollLeft -= carousel.current.offsetWidth
    }

    useProtectedPage()

    const trips = useRequestData(BASE_URL, 'get', '/trips')

    return (
        <Container>
            <Header buttonText='Home' route='/'/>
            <Section>
                <AdminWrapper>
                    <TripInfoBox>
                        <InfoTitle>Viagens</InfoTitle>
                        <ButtonBox>
                            <RouteLink to='/admin/create_new_trip'>
                                <FunctionsButton text='Nova viagem'/>
                            </RouteLink>
                        </ButtonBox>
                        <MenuIcon/>
                    </TripInfoBox>
                    <ArrowLeftBox onClick={carouselLeftClick}><LeftArrow/></ArrowLeftBox>
                    <PlanetCardsView ref={carousel}>
                        {trips && trips.map(trip => {
                            return (
                                <LinkRouter to={`/admin/trip_details/${trip.id}`} key={trip.id}>
                                    <CardPlanet trip={trip}/>
                                </LinkRouter>
                            )
                        })}
                        
                    </PlanetCardsView>
                    <ArrowRigthBox onClick={carouselRightClick}><RightArrow/></ArrowRigthBox>
                </AdminWrapper>
            </Section>
            <Footer/>
        </Container>
    )
}