import React from "react";
import styled from "styled-components";

const MediaContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const MainButton = styled.button`
    margin: 0 5px;
`

const ConteinerPrincipal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export class CompartilharMidias extends React.Component {

    state = {
        shareText: ''
    }

    shareOnInsta = () => {
        console.log(`Post compartilhado no Instagram com a mensagem: ${this.state.shareText}`)
        this.setState({shareText: ''})
      }
    
    shareOnFace = () => {
        console.log(`Post compartilhado no Facebook com a mensagem: ${this.state.shareText}`)
        this.setState({shareText: ''})
    }

    shareOnTwitter = () => {
        console.log(`Post compartilhado no Twitter com a mensagem: ${this.state.shareText}`)
        this.setState({shareText: ''})
    }

    commentShare = (event) => {
        this.setState({shareText: event.target.value})
    }


    render() {
        return (
            <ConteinerPrincipal>
                <input 
                    placeholder='Escreva algo...'
                    value={this.state.shareText}
                    onChange={this.commentShare}
                />
                <MediaContainer>
                    <button onClick={this.shareOnInsta}>Instagram</button>
                    <MainButton onClick={this.shareOnFace}>Facebook</MainButton>
                    <button onClick={this.shareOnTwitter}>Twitter</button>
                </MediaContainer>
            </ConteinerPrincipal>
        )
    }
}
