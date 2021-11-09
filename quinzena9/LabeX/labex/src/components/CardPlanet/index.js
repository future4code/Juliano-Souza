// Styles
import { Container, Title, CaracteristicsWrapper, Caracteristic, Price, Value, Image } from './style'
// import Mercury from '../../assets/Images/planets/mercury.png'
// import Venus from '../../assets/Images/planets/venus.png'
// import Mars from '../../assets/Images/planets/mars.png'
// import Jupiter from '../../assets/Images/planets/jupiter.png'
// import Saturn from '../../assets/Images/planets/saturn.png'
// import Uranus from '../../assets/Images/planets/uranus.png'
// import Neptune from '../../assets/Images/planets/neptune.png'

// const tripPrice = ['221.990', '199.900', '312.690', '429.500', '329.500', '689.990', '550.100']
// const planetImage = [Mercury, Venus, Mars, Jupiter, Saturn, Uranus, Neptune]

export function CardPlanet({ trip }) {

    // console.log(trip)

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
                    <Price>Por R$ <Value>{''}</Value></Price>
                    <Image src={''} alt={planet}/>
            </Container>
        </>
    )
}