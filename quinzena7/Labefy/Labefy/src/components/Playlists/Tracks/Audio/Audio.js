import React, { useRef } from "react";
import Pause from "../Icons/pause.png"
import Play from "../Icons/play.png"
import styled from "styled-components";

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

function Audio({src, handleAudio, isPlayed}) {

    const audioControl = useRef(null)

    const handlePlayer = () => {
        handleAudio()
        if (isPlayed === undefined || !isPlayed) {
            audioControl.current.play()
        } else if (isPlayed) {
            audioControl.current.pause()
        }
    }

    return (
        <div>
            <audio ref={audioControl}>
                <source src={src}/>
            </audio>
            <Player>
                    <Icon
                        onClick={handlePlayer}
                        src={isPlayed ? Pause : Play}
                        alt={'Controls'}
                        />
                </Player>
        </div>
    )
}

export default Audio