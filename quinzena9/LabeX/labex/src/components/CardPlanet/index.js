// React
import { useContext } from 'react'

// Styles
import { Container, Title, CaracteristicsWrapper, Caracteristic, Price, Value, Image, LinkRouter } from './style'
import Mercury from '../../assets/Images/planets/mercury.png'
import Venus from '../../assets/Images/planets/venus.png'
import Mars from '../../assets/Images/planets/mars.png'
import Jupiter from '../../assets/Images/planets/jupiter.png'
import Saturn from '../../assets/Images/planets/saturn.png'
import Uranus from '../../assets/Images/planets/uranus.png'
import Neptune from '../../assets/Images/planets/neptune.png'

// Context
import { PublicContext } from '../../contexts/PublicContext'


const tripPrice = ['221.990', '199.900', '312.690', '429.500', '329.500', '689.990', '550.100']
const planetImage = [Mercury, Venus, Mars, Jupiter, Saturn, Uranus, Neptune]

export function CardPlanet() {

    const { trips } = useContext(PublicContext)

    return (
        <>
            {trips?.map((value, i) => {

                const { id, name, description, planet, durationInDays, date } = value

                return (
                    <LinkRouter to={`/trips/application/${id}/${name}`} key={id}>
                        <Container>
                            <Title>{planet}</Title>
                            <CaracteristicsWrapper>
                                <Caracteristic>{name}</Caracteristic>
                                <Caracteristic>{description}</Caracteristic>
                                <Caracteristic>Duração: {durationInDays} dias</Caracteristic>
                                <Caracteristic>Data: {date}</Caracteristic>
                            </CaracteristicsWrapper>
                            <Price>Por R$ <Value>{tripPrice[(i % trips.length / 1.5).toFixed(0)]}</Value></Price>
                            <Image src={planetImage[(i % trips.length / 1.5).toFixed(0)]} alt={planet}/>
                        </Container>
                    </LinkRouter>
                )
            })}
        </>
    )
}