import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components"
import Arrow from "./Icons/arrow.png"
import axios from "axios"
import Delete from "./Icons/delete.png"
import Tracks from './Tracks/Tracks';

// Container

const Container = styled.div`
    background-color: #FFFFFF;
    grid-area: Playlists;
    width: 50%;
    /* backdrop-filter: blur(8px); */
    @media(max-width: 800px) {
        width: 100%;
        padding: 10px;
        height: 55vh;
    }
`
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// InfoWrapper

const InfoWrapper = styled.div`
    width: 100%;
    height: 35%;
    /* background-color: lightpink; */
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    @media(max-width: 800px) {
        justify-content: center;
    }
`
const Title = styled.span`
    letter-spacing: -2px;
    font-size: 3.5em;
    font-weight: 700;
    @media(max-width: 550px) {
        font-size: 3em;
    }
`
const CreatePlaylistBtn = styled.button`
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
    @media(max-width: 550px) {
        font-size: 0.72em;
    }
`
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Playlist Wrapper

const PlaylistWrapper = styled.div`
    width: 100%;
    height: 65%;
    padding: 0 5px;
    display: ${props => !props.creatPlaylistState ? 'flex' : 'none'};
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    position: relative;
    overflow-x: hidden;
`
const PlaylistContent = styled.div`
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    max-width: 100%;
    overflow-x: hidden;
    /* background-color: lime; */
    border-radius: 10px;
    scroll-behavior: smooth;
`
const Playlist = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    position: relative;
    align-items: center;
    transition: 1s linear;
`
const PlaylistCard = styled.div`
    min-width: 180px;
    height: 100%;
    background-color: ${p => p.setBackgroundColor};
    border-radius: 10px;
    position: relative;
    cursor: pointer;
    transform: scale(0.95);
    transition: 200ms ease-in-out;
    &:hover {
        transform: scale(0.98);
    }
`
const PlaylistTitle = styled.span`
    height: 100%;
    max-width: 180px;
    /* background-color: lime; */
    letter-spacing: -1px;
    font-size: 1.5em;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    word-wrap: break-word;
    padding: 8px;
    color: ${p => p.setFontColor};
    text-align: center;
`
const DeleteIcon = styled.img`
    width: 14px;
    top: 10px;
    right: 10px;
    position: absolute;
    transition: 300ms ease-in-out;
    cursor: pointer;
    &:hover {
        transform: rotate(45deg);
    }
`
const ScrollWrapper = styled.div`
    width: 8%;
    height: 100%;
    /* background-color: darkolivegreen; */
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: center;
    position: absolute;
    right: 0;
`
const ArrowLeft = styled.div`
    cursor: pointer;
    width: 50px;
    height: 50px;
    background-color: #D3D3D360;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const ArrowRight = styled(ArrowLeft)`
`
const IconLeft = styled.img`
    width: 30px;
`
const IconRight = styled(IconLeft)`
    transform: rotate(180deg);
`

// Create Playlist Content

const CreatePlaylistContent = styled.div`
    width: 100%;
    height: 65%;
    /* background-color: orange; */
    display: ${props => !props.creatPlaylistState ? 'none' : 'flex'};
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
const ConfirmCreate = styled(CreatePlaylistBtn)`
    margin-top: 10px;
`
// ~~~~~~~~~~~~~~~

// loader

const LoaderContent = styled.div`
    /* background-color: lime; */
    width: 950px;
    height: 100%;
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

// Alert

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
//~~~~~~~~~~~~~~~~~~~~~~~~


function Playlists() {

    const [createPlaylist, setCreatePlaylist] = useState(false)
    const [randomNumber, setRandomNumber] = useState(-1)
    const [playlist, setPlaylist] = useState([])
    const [playlistName, setPlaylistName] = useState('')
    const [responseAlert, setResponseAlert] = useState('')
    const [loading, setLoading] = useState(true);
    const [trackList, setTrackList] = useState([])
    const [handleTrackDisplay, setHandleTrackDisplay] = useState(false)
    const [addTrackDisplay, setAddTrackDisplay] = useState(false)
    const [currentId, setCurrentId] = useState('')
    const [trackName, setTrackName] = useState('')
    const [artistName, setArtistName] = useState('')
    const [trackUrl, setTrackUrl] = useState('')
    const scrollX = useRef(null)
    const [trackResponseAlert, setTrackResponseAlert] = useState('')
    const [trackLoading, setTrackLoading] = useState(true)


    // Javascript

    
    const setBackgroundColor = (i) => {
        const backgroundColors = ['#FDE4E3', '#F25843', '#F1F3F4', '#E7F1C5', '#FFF0B5']

        return i % backgroundColors.length -1 === 0 ? backgroundColors[0] :
               i % backgroundColors.length === 1 ? backgroundColors[1] :
               i % backgroundColors.length === 2 ? backgroundColors[2] :
               i % backgroundColors.length === 3 ? backgroundColors[3] :
               i % backgroundColors.length === 4 ? backgroundColors[4] :
               backgroundColors[2]
    }
    const setFontColor = (i) => {
        const fontColors = ['#F25843', '#FDE4E3', '#175677', '#4E1D7B', '#2C2D87', '#0E0A19']

        return i % fontColors.length -1 === 0 ? fontColors[0] :
               i % fontColors.length === 1 ? fontColors[1] :
               i % fontColors.length === 2 ? fontColors[2] :
               i % fontColors.length === 3 ? fontColors[3] :
               i % fontColors.length === 4 ? fontColors[4] :
               fontColors[5]
    }
    useEffect(() => {
        getAllPlaylists()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const makePlaylist = (userPlaylistName) => {
        const sortNumber = Math.floor(Math.random() * 6)

        const URL = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
        const AUTH = {headers: {Authorization: "juliano-banu"}}
        const BODY = {name: userPlaylistName}
        axios.post(URL, BODY, AUTH)
        .then(() => {
            getAllPlaylists()
            setResponseAlert('Success')
            setRandomNumber(sortNumber)
            setTimeout(() => setResponseAlert(''), 2500)
        })
        .catch(() => {
            setResponseAlert('Failed')
            setTimeout(() => setResponseAlert(''), 2500)
        })
        setPlaylistName('')
    }
    const getAllPlaylists = () => {
        // setSeePlaylist(!seePlaylist)
         
        const URL = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
        const AUTH = {headers: {Authorization: "juliano-banu"}}
        axios.get(URL, AUTH)
        .then(res => {
            setPlaylist(res.data)
            setLoading(false)
        }).catch(rej => console.log(rej))
        
    }
    const deletePlaylist = (id) => {
        const URL = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
        const AUTH = {headers: {Authorization: "juliano-banu"}}
        axios.delete(URL, AUTH)
        .then(() => {
            getAllPlaylists()
            setHandleTrackDisplay(false)
        })
        .catch(() => console.log('Erro'))
    }
    const searchPlaylist = (name, i) => {
        setHandleTrackDisplay(true)
        setTrackLoading(true)
        getPlaylistTracks(name, i)
        setAddTrackDisplay(false)

        const URL = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/search?name=${name}`
        const AUTH = {headers: {Authorization: "juliano-banu"}}
        axios.get(URL, AUTH)
        .then()
        .catch(rej => console.log(rej))
    }
    const getPlaylistTracks = (id, i) => {
        const URL = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
        const AUTH = {headers: {Authorization: "juliano-banu"}}
        axios.get(URL, AUTH)
        .then(res => {
            setTrackList(res.data.result.tracks)
            setTrackLoading(false)
        })
        .catch(rej => console.log(rej))
    }

    const addTrackToPlaylist = (id) => {
        const URL = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
        const AUTH = {headers: {Authorization: "juliano-banu"}}
        const BODY = {name: trackName, artist: artistName, url: trackUrl}
        axios.post(URL, BODY, AUTH)
        .then(() => {
            setTrackResponseAlert('Success')
            setTrackName('')
            setArtistName('')
            setTrackUrl('')
            getPlaylistTracks(currentId)
            setTimeout(() => setTrackResponseAlert(''), 2500)
        })
        .catch(() => {
            setTrackResponseAlert('Failed')
            setTrackName('')
            setArtistName('')
            setTrackUrl('')
            setTimeout(() => setTrackResponseAlert(''), 2500)
        })
    }
    const handleLeftArrow = (event) => {
        event.preventDefault()
        scrollX.current.scrollLeft -= scrollX.current.offsetWidth
    }
    const handleRightArrow = (event) => {
        event.preventDefault()
        scrollX.current.scrollLeft += scrollX.current.offsetWidth
    }
    const changeAddTrackDisplay = () => {
        setAddTrackDisplay(!addTrackDisplay)
        setHandleTrackDisplay(!handleTrackDisplay)
    }
    

    return (
        <Container>
            <InfoWrapper>
                <Title>Playlists</Title>
                <CreatePlaylistBtn
                    onClick={() => {
                        setCreatePlaylist(!createPlaylist)
                        setHandleTrackDisplay(false)
                        setAddTrackDisplay(false)
                    }}
                >
                {!createPlaylist ? 'Criar playlist' : 'Voltar'}
                </CreatePlaylistBtn>
            </InfoWrapper>
            <CreatePlaylistContent creatPlaylistState={createPlaylist}>
                <PlaylistAlert response={responseAlert}>
                    {responseAlert === 'Success' ? 'Playlist Criada Com Sucesso!' : 'Oops, algo errado aconteceu!'}
                </PlaylistAlert>
                <InputLabel htmlFor={'namePlaylist'}>Nome<LengthAlert>Max. 25 caracteres</LengthAlert></InputLabel>
                <InputNamePlaylist
                    autoComplete={'Off'}
                    maxLength={'25'}
                    id={'namePlaylist'}
                    placeholder={'Digite aqui o nome da playlist'}
                    value={playlistName}
                    onChange={(event) => setPlaylistName(event.target.value)}
                />
                <ConfirmCreate onClick={() => makePlaylist(playlistName)}>Criar</ConfirmCreate>
            </CreatePlaylistContent>
            <PlaylistWrapper 
                creatPlaylistState={createPlaylist}>
                <PlaylistContent ref={scrollX}>
                    <Playlist>
                        
                        {loading ? 
                        <LoaderContent><Loader/></LoaderContent>
                        :
                        playlist.result.list.map((value, i) => {
                            return (
                                <PlaylistCard 
                                    onClick={() => {
                                        searchPlaylist(value.id, i)
                                        setCurrentId(value.id)
                                    }}
                                    key={i} 
                                    setBackgroundColor={setBackgroundColor(i)}
                                    >
                                    <PlaylistTitle setFontColor={setFontColor(i)}>{value.name}</PlaylistTitle>
                                    <DeleteIcon src={Delete} alt={'Delete Playlist Icon'}onClick={() => deletePlaylist(value.id)}/>
                                </PlaylistCard>
                            )
                        })}
                    </Playlist>
                </PlaylistContent>

                <ScrollWrapper>
                    <ArrowLeft>
                        <IconLeft onClick={handleLeftArrow} src={Arrow} alt={'ArrowLeft'}/>
                    </ArrowLeft>
                    <ArrowRight>
                        <IconRight onClick={handleRightArrow} src={Arrow} alt={'ArroRight'}/>
                    </ArrowRight>
                </ScrollWrapper>
            </PlaylistWrapper>
            <Tracks 
                handleTrackDisplay={handleTrackDisplay}
                changeAddTrackDisplay={changeAddTrackDisplay}
                stateTrackDisplay={addTrackDisplay}
                trackList={trackList}
                addTrackToPlaylist={() => {
                    addTrackToPlaylist(currentId)
                }}

                trackName={(event) => setTrackName(event.target.value)}
                nameValue={trackName}

                artistName={(event) => setArtistName(event.target.value)}
                artistValue={artistName}

                trackUrl={(event) => setTrackUrl(event.target.value)}
                urlValue={trackUrl}

                response={trackResponseAlert}

                loading={trackLoading}
                />
        </Container>
    )
}

export default Playlists