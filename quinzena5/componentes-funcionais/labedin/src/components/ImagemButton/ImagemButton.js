import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 200px;
    padding: 15px 30px;
    margin: 10px auto;
`

const ContentImage = styled.img`
    width: 30px;
    margin-right: 10px;
`

function ImagemButton(props) {
    return (
        <Content>
            <ContentImage src={ props.imagem }/>
            <p>{ props.texto }</p>
        </Content>

    )
}

export default ImagemButton;