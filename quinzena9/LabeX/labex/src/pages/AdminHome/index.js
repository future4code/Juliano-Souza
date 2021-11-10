import { useProtectedPage } from "../../hooks/useProtectedPage"
import { BASE_URL } from '../../constants/urls'
import { useRequestData } from '../../hooks/useRequestData'
import { useRef } from 'react'

// Styles
import { Container, Section, AdminWrapper, PlanetCardsView, InfoBox, InfoTitle, ArrowBox, LeftArrow, RightArrow, TripInfoBox, LinkRouter } from './style'

// Components
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { CardPlanet } from "../../components/CardPlanet"
import { Button } from '../../components/Button'

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
                    <InfoBox>
                        <TripInfoBox>
                            <InfoTitle>Viagens Cadastradas</InfoTitle>
                            <Button text='Nova viagem' size='150px' route='/admin/create_new_trip' />
                        </TripInfoBox>
                        <ArrowBox>
                            <LeftArrow onClick={carouselLeftClick}/>
                            <RightArrow onClick={carouselRightClick}/>
                        </ArrowBox>
                    </InfoBox>
                    <PlanetCardsView ref={carousel}>
                        {trips && trips.map(trip => {
                            return (
                                <LinkRouter to={`/admin/trip_details/${trip.id}`} key={trip.id}>
                                    <CardPlanet trip={trip}/>
                                </LinkRouter>
                            )
                        })}
                    </PlanetCardsView>
                </AdminWrapper>
            </Section>
            <Footer/>
        </Container>
    )
}