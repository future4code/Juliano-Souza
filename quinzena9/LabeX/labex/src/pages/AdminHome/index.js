import { useProtectedPage } from "../../hooks/useProtectedPage"
import { useRef } from 'react'

// Styles
import { Container, Section, AdminWrapper, PlanetCardsView, InfoBox, InfoTitle, ArrowBox, LeftArrow, RightArrow } from './style'

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

    return (
        <Container>
            <Header buttonText='Home' route='/'/>
            <Section>
                <AdminWrapper>
                    <InfoBox>
                        <InfoTitle>Viagens Cadastradas</InfoTitle>
                        <Button text='Criar nova viagem' size='150px' route='/admin/create_new_trip' />
                        <ArrowBox>
                            <LeftArrow onClick={carouselLeftClick}/>
                            <RightArrow onClick={carouselRightClick}/>
                        </ArrowBox>
                    </InfoBox>
                    <PlanetCardsView ref={carousel}>
                        <CardPlanet/>
                    </PlanetCardsView>
                </AdminWrapper>
            </Section>
            <Footer/>
        </Container>
    )
}