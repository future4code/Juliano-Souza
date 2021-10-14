import React, { useState, useEffect } from "react";
import styled from "styled-components"
// import axios from "axios"

// Container

const Container = styled.div`
    /* width: 20%; */
    grid-area: SectionRight;
    /* background-color: lightsteelblue; */
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
`
//~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Card Info One

const CardInfoOne = styled.div`
    background-color: #FFF0B5;
    width: 90%;
    height: 35%;
    border-radius: 10px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    padding-left: 15px;
`
const PlaylistsData = styled.div`
    color: #2C2D87;
`
const NumberOfTracks = styled.span`
    font-size: 1.1em;
    font-weight: 500;
`
const Text = styled.span`
    font-size: .8em;
    font-weight: 600;
    text-transform: uppercase;
    padding-left: 5px;
`
const CurrentPlaylistName = styled.span`
    font-size: 2em;
    font-weight: 700;
    color: #2C2D87;
`
//~~~~~~~~~~~~~~~~~~~~~~~~~~

// Card Info Two

const CardInfoTwo = styled.div`
    background-color: lime;
    width: 90%;
    height: 60%;
    border-radius: 10px 10px 0 0;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`
const ListenToo = styled.span`
    font-size: 1.4em;
    font-weight: 600;
    padding-left: 5px;
    letter-spacing: -2px;
`
const PlaylistToListen = styled.span`
    font-size: 2em;
    font-weight: 700;
    padding-left: 5px;
    letter-spacing: -2px;
`

function SectionRight() {
    return (
        <Container>
            <CardInfoOne>
                <PlaylistsData>
                    <NumberOfTracks>Ouvindo agora</NumberOfTracks>
                </PlaylistsData>
                <CurrentPlaylistName>Top Global</CurrentPlaylistName>
            </CardInfoOne>
            <CardInfoTwo>
                <ListenToo>Ouça também</ListenToo>
                <PlaylistToListen>Happy Day</PlaylistToListen>
            </CardInfoTwo>
        </Container>
    )
}

export default SectionRight