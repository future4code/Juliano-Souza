import React, { useState } from "react";
import styled, { keyframes } from "styled-components"
import Audio from './Audio/Audio'
import Like from "./Icons/like.png"
import Liked from "./Icons/liked.png"


// Body 

const Body = styled.div`
    width: 67%;
    height: 125%;
    @media(max-width: 800px) {
        width: 100%;
        padding: 10px;
        max-height: 55vh;
    }
`

// Container

const Container = styled.div`
    grid-area: Tracks;
    padding-top: 12px;
    width: 100%;
    max-height: 100%;
    display: ${props => props.handleTrackDisplay ? 'block' : 'none'};
    overflow-y: auto;
    ::-webkit-scrollbar {
    background-color: #FFFFFF;
    width: 0.001px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #00000020;
    border-radius: 5px;
  }
`

// Button

const AddTrackContainer = styled.div`
    padding-top: 12px;
    width: 100%;
    height: 100%;
    display: ${props => props.stateTrackDisplay ? 'flex' : 'none'};
    flex-flow: column nowrap;
    align-items: flex-start;
    justify-content: space-evenly;
`
const AddTrackBtn = styled.button`
    background-color: #FEF2F2;
    border: 1px solid #E06464;
    padding: 0.5em 1em;
    border-radius: 15px;
    text-transform: uppercase;
    color: #E06464;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    cursor: pointer;
    margin-left: 25px;
    transition: 100ms linear;
    &:active {
        transform: scale(.92);
    }
`
const SubmitTrack = styled(AddTrackBtn)`
    /* display: ${props => props.handleTrackDisplay ? 'none' : 'none'}; */
`
const GoBackBtn = styled(AddTrackBtn)`
    /* display: ${props => props.handleTrackDisplay ? 'block' : 'none'}; */
`

// 

const TrackCard = styled.div`
    width: 100%;
    min-height: 70px;
    border-radius: 10px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    padding: 5px;
    /* align-items: center; */
    transition: 200ms ease-in-out;
    &:hover {
        background-color: #F7F7F7;
        /* color: #F25843; */
    }
`
// Track

const TrackPosition = styled.div`
    padding: 0 20px;
    min-height: inherit;
    /* background-color: darkorange; */
    border-radius: 10px 0 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #F25844;
    font-size: 1.4em;
    font-weight: 600;
    
`
const TrackData = styled.div`
    flex-grow: 1;
    min-width: 80px;
    /* background-color: hotpink; */
    min-height: inherit;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    
`
const Singer = styled.span`
    color: #F25844;
    font-size: 1em;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis; 
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
`
const TrackName = styled.span`
    font-size: 1.2em;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis; 
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
`
const LikeTrack = styled.div`
    width: 40px;
    height: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`
const LikeIcon = styled.img`
    width: 24px;
    &:active {
        transform: scale(.9);
    }
`
const Player = styled.div`
    width: 80px;
    min-height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`
const Icon = styled.img`
    width: 20px;
    &:active {
        transform: scale(.9);
    }
`
const TrackCover = styled.div`
    width: 70px;
    background-color: honeydew;
    min-height: inherit;
    border-radius: 0 10px 10px 0;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Image = styled.img`
    width: inherit;
    /* width: 50px; */
    background-color: lightsalmon;
    border-radius: 10px;
    object-fit: fill;
`

//

const CreatePlaylistContent = styled.div`
    width: 100%;
    /* height: 65%; */
    /* background-color: orange; */
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    
`
const InputLabel = styled.label`
    color: #E06464;
    font-weight: 600;
    margin-bottom: 8px;
    font-size: .9em;
    margin-left: 25px;
`
const LengthAlert = styled.span`
    color: #0E0A19;
    text-transform: uppercase;
    font-size: .65em;
    margin-left: 5px;
`
const InputNamePlaylist = styled.input`
    /* background-color: #FEF2F2; */
    border: 1px solid #E06464;
    width: 40%;
    padding: 0.5em 1em;
    border-radius: 15px;
    outline: none;
    /* text-transform: uppercase; */
    color: #E06464;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    margin-left: 25px;
`


const PlaylistAlert = styled.span`
    background-color: ${props => props.response === 'Success' ? '#74c69d' : '#e76f51'};
    margin-left: 25px;
    padding: 5px 10px;
    margin-bottom: 8px;
    border-radius: 4px;
    font-size: .85em;
    font-weight: 500;
    color: ${props => props.response === 'Success' ? '#1b4332' : '#f1faee'};
    transition: 200ms ease-in-out;
    opacity: ${props => props.response ? '1' : '0'};
`
//

const LoaderContent = styled.div`
    /* background-color: lime; */
    width: 100%;
    height: 40%;
    top: 0;
`
const is_rotating = keyframes`
    to {
    transform: rotate(1turn);
    }
`
const Loader = styled.div`
    animation: ${is_rotating} 1s infinite;
    border: 6px solid #FDE4E3;
    border-radius: 50%;
    border-top-color: #F25843;
    height: 70px;
    width: 70px;
    margin: 40px auto;
`


function Tracks({handleTrackDisplay, trackList, changeAddTrackDisplay, stateTrackDisplay, addTrackToPlaylist, trackName, nameValue, artistName, artistValue, trackUrl, urlValue, response, loading}) {
    

    const [playPress, setPlayPress] = useState(false)
    const [favoriteTracks, setFavotireTracks] = useState([])


    // Javascript 

    const handleLike = (id) => {
        const setBoolean = false
        const getTrack = trackList.filter(value => value.id === id)
        
        setFavotireTracks(favoriteTracks => [...favoriteTracks, getTrack[0]])

        if (getTrack[0].liked === undefined) {
            const trackFiltered = getTrack.map(value => value = {...value, liked: !setBoolean})
            const indexOfTrackLiked = trackList.findIndex(value => value.id === id)
            trackList.splice(indexOfTrackLiked, 1, trackFiltered[0])
        } else if (!getTrack[0].liked){
            getTrack[0].liked = !setBoolean
            const indexOfTrackLiked = trackList.findIndex(value => value.id === id)
            trackList.splice(indexOfTrackLiked, 1, getTrack[0])
        } else {
            getTrack[0].liked = setBoolean
            const indexOfTrackLiked = trackList.findIndex(value => value.id === id)
            trackList.splice(indexOfTrackLiked, 1, getTrack[0])
        }
    }

    const handleAudio = (id, i) => {
        setPlayPress(!playPress)

        const getTrack = trackList.filter(value => value.id === id)

        if (getTrack[0].isPlayed === undefined) {
            const trackFiltered = getTrack.map(value => value = {...value, isPlayed: !undefined})
            const indexOfTrackPlayed = trackList.findIndex(value => value.id === id)
            trackList.splice(indexOfTrackPlayed, 1, trackFiltered[0])
    
        } else if (!getTrack[0].isPlayed){
            getTrack[0].isPlayed = true
            const indexOfTrackPlayed = trackList.findIndex(value => value.id === id)
            trackList.splice(indexOfTrackPlayed, 1, getTrack[0])
            
        } else {
            getTrack[0].isPlayed = false
            const indexOfTrackPlayed = trackList.findIndex(value => value.id === id)
            trackList.splice(indexOfTrackPlayed, 1, getTrack[0])
            
        }
    }

    return (
        <Body>
            <Container handleTrackDisplay={handleTrackDisplay}>
                <AddTrackBtn onClick={changeAddTrackDisplay}>Adicionar Música à playlist</AddTrackBtn>
                {loading ? 
                <LoaderContent><Loader/></LoaderContent>
                :
                trackList.map((value, i) => {
                    return (
                        <TrackCard key={i}>
                            <TrackPosition>{i+1}</TrackPosition>
                            <TrackData>
                                <Singer>{value.artist}</Singer>
                                <TrackName>{value.name}</TrackName>
                            </TrackData>
                            
                            <LikeTrack>
                                <LikeIcon
                                    onClick={() => handleLike(value.id, value.liked)} 
                                    src={value.liked ? Liked : Like}
                                    alt={'Like Button'}/>
                            </LikeTrack>
                            <Player>
                                <Audio src={`http://spoti4.future4.com.br/${i+1}.mp3`} handleAudio={() => handleAudio(value.id, i)} isPlayed={value.isPlayed}/>
                            </Player>
                            
                            <TrackCover>
                                <Image/>
                            </TrackCover>
                        </TrackCard>
                    )
                })}
            </Container>
            <AddTrackContainer stateTrackDisplay={stateTrackDisplay}>
                <PlaylistAlert response={response}>
                        {response === 'Success' ? 'Musica Adicionada Com Sucesso!' : 'Oops, algo errado aconteceu!'}
                </PlaylistAlert>
                <CreatePlaylistContent>
                    <InputLabel htmlFor={'nameTrack'}>Nome<LengthAlert>Max. 30 caracteres</LengthAlert></InputLabel>
                    <InputNamePlaylist
                        autoComplete={'Off'}
                        maxLength={'30'}
                        id={'nameTrack'}
                        placeholder={'Digite aqui o nome da música'}
                        value={nameValue}
                        onChange={trackName}
                    />
                </CreatePlaylistContent>
                <CreatePlaylistContent>
                    <InputLabel htmlFor={'artistTrack'}>Artista<LengthAlert></LengthAlert></InputLabel>
                    <InputNamePlaylist
                        autoComplete={'Off'}
                        id={'artistTrack'}
                        placeholder={'Digite aqui o nome do artista'}
                        value={artistValue}
                        onChange={artistName}
                    />
                </CreatePlaylistContent>
                <CreatePlaylistContent>
                    <InputLabel htmlFor={'urlTrack'}>URL<LengthAlert></LengthAlert></InputLabel>
                    <InputNamePlaylist
                        autoComplete={'Off'}
                        id={'urlTrack'}
                        placeholder={'Digite aqui a URL da música'}
                        value={urlValue}
                        onChange={trackUrl}
                    />
                </CreatePlaylistContent>
                <SubmitTrack onClick={addTrackToPlaylist}>Adicionar</SubmitTrack>
                <GoBackBtn onClick={changeAddTrackDisplay}>Voltar</GoBackBtn>
            </AddTrackContainer>
        </Body>
    )
}

export default Tracks