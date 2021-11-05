// React
import { useRef } from 'react'

// Styles
import { Container, Apresentation, TextWrapper, ImageWrapper, Title, TransformTitle, AboutTrip, ContentOne, ContentTwo, InfoTitle, InfoParagraph, PlanetsAvailable, InfoParagraphTwo, PlanetCardsView, InfoBox, ArrowBox, LeftArrow, RightArrow } from './style'

// Components
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { CardPlanet } from '../../components/CardPlanet'
import { Astronaut } from '../../assets/animation/Astronaut'

export function TripInformation() {

    const carousel = useRef(null)

    const carouselRightClick = () => {
        carousel.current.scrollLeft += carousel.current.offsetWidth
    }

    const carouselLeftClick = () => {
        carousel.current.scrollLeft -= carousel.current.offsetWidth
    }

    return (
        <Container>
            <Header buttonText='Home' route='/'/>
            <Apresentation>
                <TextWrapper>
                    <Title><TransformTitle>LabeX</TransformTitle></Title>
                </TextWrapper>
                <ImageWrapper>
                    <Astronaut/>
                </ImageWrapper>
            </Apresentation>
            <AboutTrip>
                <ContentOne>
                    <InfoTitle>Vôo para outro planeta</InfoTitle>
                    <InfoParagraph>O ônibus espacial está equipado com tudo que você vá precisar com muito conforto. A bordo do foguete não existem apenas cabines separadas para passageiros, refeitório e salões. Existem também clubes fitness, cinemas, centros científicos e de entreterimento.</InfoParagraph>
                </ContentOne>
                <ContentTwo>
                    <InfoTitle>Tecnologias</InfoTitle>
                    <InfoParagraphTwo>A tecnologia faz parte da vida dos residentes. Toda infraestrutura fornece segurança completa, esporte e playgrounds inteligentes, estradas e calçadas com navegação clara e transparente.</InfoParagraphTwo>
                </ContentTwo>
            </AboutTrip>
            <PlanetsAvailable>
                <InfoBox>
                    <InfoTitle>Viagens disponíveis</InfoTitle>
                    <ArrowBox>
                        <LeftArrow onClick={carouselLeftClick}/>
                        <RightArrow onClick={carouselRightClick}/>
                    </ArrowBox>
                </InfoBox>
                <PlanetCardsView ref={carousel}>
                    <CardPlanet/>
                </PlanetCardsView>
            </PlanetsAvailable>
            <Footer/>
        </Container>
    )
}