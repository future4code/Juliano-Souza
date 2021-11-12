// Styles
import { Container, Title, CaracteristicsWrapper, Caracteristic, Image } from './style'

// Assets
import Saturn from '../../assets/Images/planets/saturn.png'

export function CardPlanet({ trip }) {

    const { name, planet, description, date, durationInDays } = trip

    return (
        <>
            <Container>
                    <Title>{planet}</Title>
                    <CaracteristicsWrapper>
                        <Caracteristic>{name}</Caracteristic>
                        <Caracteristic>{description}</Caracteristic>
                        <Caracteristic>Duração: {durationInDays} dias</Caracteristic>
                        <Caracteristic>Data: {date}</Caracteristic>
                    </CaracteristicsWrapper>
                    <Image src={Saturn} alt={planet}/>
            </Container>
        </>
    )
}