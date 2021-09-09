import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`

const ContentImage = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

const ContentInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

const InfoTitle4 = styled.h4`
    margin-bottom: 15px;
`

function CardGrande(props) {
    return (
        <Content>
            <ContentImage src={ props.imagem } />
            <ContentInfo>
                <InfoTitle4>{ props.nome }</InfoTitle4>
                <p>{ props.descricao }</p>
            </ContentInfo>
        </Content>
    )
}

export default CardGrande;