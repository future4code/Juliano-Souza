import { Container, Title, CaracteristicsWrapper, Caracteristic, Price, Value, Image } from './style'

export function CardPlanet({ planetImage }) {
    return (
        <Container>
            <Title>Mercúrio</Title>
            <CaracteristicsWrapper>
                <Caracteristic>Verão Eterno</Caracteristic>
                <Caracteristic>Sol Brilhante</Caracteristic>
                <Caracteristic>2 Cidades</Caracteristic>
                <Caracteristic>180.000 Habitantes</Caracteristic>
            </CaracteristicsWrapper>
            <Price>Por <Value>R$212.000</Value></Price>
            <Image src={planetImage} alt=''/>
        </Container>
    )
}