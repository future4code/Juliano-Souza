import React, { useState, useEffect } from "react";
import styled from "styled-components"
// import axios from "axios"
import Heart from "./Icons/heart.png"
import Playlist from "./Icons/playlist.png"
import Fire from "./Icons/fire.png"
import Arrow from "../Playlists/Icons/arrow.png"

// Container

const Container = styled.div`
    grid-area: SectionLeft;
    /* background-color: lightskyblue; */
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: center;
    padding: 5px 10px;
`
// ~~~~~~~~~~~~~~~~~~~~~~~~~~

// Card Menu Options

const CardMenuOptions = styled.div`
    background-color: #0E0A19;
    /* background-color: #F7F7F7; */
    width: 90%;
    height: 38%;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
`
// Favorite Tracks

const FavoriteTracks = styled.div`
    width: 100%;
    height: 50px;
    /* background-color: palegreen; */
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-start;
    padding: 0 25px;
    cursor: pointer;
    /* color: #0E0A19; */
    color: #FFFFFF;
`
const FavoriteText = styled.span`
    text-transform: uppercase;
    font-size: .75em;
    font-weight: 500;
    margin-left: 10px;
    font-weight: 600;
    letter-spacing: -.5px;
`
const Icon = styled.img`
    width: 18px;
`
const FavoritePlaylists = styled(FavoriteTracks)`
`
const MostListenedTracks = styled(FavoriteTracks)`
`
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Card News One

const CardNewsOne = styled.div`
    background-color: #F7F7F7;
    width: 90%;
    height: 28%;
    border-radius: 10px;
`
// Image Section

const ImageSectionOne = styled.div`
    border-radius: 10px 10px 0 0;
    width: 100%;
    height: 60%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 300ms ease-in-out;
    filter: ${props => props.handleDisplay && 'grayscale(1)'};
    background-image: url(${props => props.backgroundImg});
    background-position: center;
    background-size: cover;
`
const Image = styled.img`
    width: 40px;
    transform: rotate(140deg);
    transition: 300ms ease-in-out;
    opacity: ${props => props.handleDisplay ? '1' : '0'};
`
const Paragraph = styled.p`
    font-size: 0.7em;
    padding: 5px;
`
// Card News Two

const CardNewsTwo = styled.div`
    background-color: #F7F7F7;
    width: 90%;
    height: 28%;
    border-radius: 10px;
`
const ImageSectionTwo = styled(ImageSectionOne)`
    background-image: url(${props => props.backgroundImg});
    background-position: center;
    background-size: cover;
`
// Mark

const Mark = styled.mark`
    background-color: #FDE4E3;
`
//

function SectionLeft() {

    const [arrowDisplayS1, setArrowDisplayS1] = useState(false)
    const [arrowDisplayS2, setArrowDisplayS2] = useState(false)

    return (
        <Container>
            <CardMenuOptions>
                <FavoriteTracks>
                    <Icon src={Heart} alt={'Heart Icon'}/>
                    <FavoriteText>Musicas favoritas</FavoriteText>
                </FavoriteTracks>
                <FavoritePlaylists>
                    <Icon src={Playlist} alt={'Heart Icon'}/>
                    <FavoriteText>Playlists favoritas</FavoriteText>
                </FavoritePlaylists>
                <MostListenedTracks>
                    <Icon src={Fire} alt={'Heart Icon'}/>
                    <FavoriteText>Musicas mais ouvidas</FavoriteText>
                </MostListenedTracks>
            </CardMenuOptions>
            <CardNewsOne>
                <ImageSectionOne 
                    backgroundImg={'https://i0.wp.com/tracklist.com.br/wp-content/uploads/2020/02/theweeknd.jpg?fit=960%2C640&ssl=1'}
                    handleDisplay={arrowDisplayS1}
                    onMouseEnter={() => setArrowDisplayS1(true)}
                    onMouseLeave={() => setArrowDisplayS1(false)}
                    >
                    <Image 
                        handleDisplay={arrowDisplayS1}
                        src={Arrow}
                        alt={'Arrow Icon'}/>
                </ImageSectionOne>
                <Paragraph><Mark><strong>Michael Jackson</strong></Mark> está vivo? Videoclipe do popstar <Mark><strong>The Weeknd</strong></Mark> bota fogo em teoria da conspiração.</Paragraph>
            </CardNewsOne>
            <CardNewsTwo>
                <ImageSectionTwo 
                    backgroundImg={'https://rapforte.com/wp-content/uploads/2021/08/Kid-Laroi.jpg'}
                    handleDisplay={arrowDisplayS2}
                    onMouseEnter={() => setArrowDisplayS2(true)}
                    onMouseLeave={() => setArrowDisplayS2(false)}
                    >
                    <Image 
                        handleDisplay={arrowDisplayS2}
                        src={Arrow}
                        alt={'Arrow Icon'}/>
                </ImageSectionTwo>
                <Paragraph><strong>"Stay"</strong>, de <Mark><strong>The Kid LAROI</strong></Mark> com <Mark><strong>Justin Bieber</strong></Mark>, volta ao topo da parada americana de singles.</Paragraph>
            </CardNewsTwo>
        </Container>
    )
}

export default SectionLeft