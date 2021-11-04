// Styles
import { Container, Apresentation, TextWrapper, ImageWrapper, Details, TitleDetails, SubtitleDetails, RedirectBox, ArrowIcon, RedirectParagraph, Title, TransformTitle, AboutTrip, ContentOne, ContentTwo, InfoTitle, InfoParagraph, PlanetsAvailable, Paragraph, PlanetCardsView } from './style'

// Assets
import Mars from '../../assets/Images/planets/mars.png'
// Components
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { CardPlanet } from '../../components/CardPlanet'

export function TripInformation() {
    return (
        <Container>
            <Header buttonText='Home' route='/'/>
            <Apresentation>
                <TextWrapper>
                    <Title><TransformTitle>LabeX</TransformTitle></Title>
                    <Paragraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Paragraph>
                </TextWrapper>
                <ImageWrapper backgroundImage={Mars}>
                    <Details>
                        <TitleDetails>Marte</TitleDetails>
                        <SubtitleDetails>Temperatura -125° ~ 22°</SubtitleDetails>
                        <SubtitleDetails>Gravidade 38%</SubtitleDetails>
                        <SubtitleDetails>Ano 687 dias</SubtitleDetails>
                        <RedirectBox>
                            <ArrowIcon/>
                            <RedirectParagraph>Mais detalhes</RedirectParagraph>
                        </RedirectBox>
                    </Details>
                </ImageWrapper>
            </Apresentation>
            <AboutTrip>
                <ContentOne>
                    <InfoTitle>Vôo para outro planeta</InfoTitle>
                    <InfoParagraph>O ônibus espacial está equipado com tudo que você vá precisar com muito conforto. A bordo do foguete não existem apenas cabines separadas para passageiros, refeitório e salões. Existem também clubes fitness, cinemas, centros científicos e de entreterimento.</InfoParagraph>
                </ContentOne>
                <ContentTwo>
                    <InfoTitle>Tecnologias</InfoTitle>
                    <InfoParagraph>A tecnologia faz parte da vida dos residentes. Toda infraestrutura fornece segurança completa, esporte e playgrounds inteligentes, estradas e calçadas com navegação clara e transparente.</InfoParagraph>
                </ContentTwo>
            </AboutTrip>
            <PlanetsAvailable>
                <InfoTitle>Planetas disponíveis</InfoTitle>
                <PlanetCardsView>
                    <CardPlanet/>
                </PlanetCardsView>
            </PlanetsAvailable>
            <Footer/>
        </Container>
    )
}