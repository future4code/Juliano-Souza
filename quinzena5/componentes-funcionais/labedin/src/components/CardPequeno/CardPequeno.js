import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
    width: 40vw;
    border: 1px solid black;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 1em;
`
const ContentImage = styled.img`
    max-width: 30px;
    margin-right: 10px;
`
const ContentParagraphLabel = styled.p`
    margin-right: 10px;
`


const CardPequeno = (props) => {
    return (
        <Content>
            <ContentImage src={props.icon}/>
            <ContentParagraphLabel><strong>{props.label}</strong></ContentParagraphLabel>
            <p>{props.email}{props.address}</p>
        </Content>
    )
}

export default CardPequeno