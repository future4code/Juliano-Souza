import styled from 'styled-components'

export const LogoStyle = styled.span`
    font: bold 18px 'Montserrat', sans-serif;
`
export function Logo() {
    return (
        <LogoStyle>astro<span style={{color: '#FE1A1A'}}>Match</span></LogoStyle>
    )
}