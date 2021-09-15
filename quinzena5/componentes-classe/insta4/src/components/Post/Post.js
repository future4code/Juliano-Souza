import React from 'react'
import styled from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import iconePostNaoSalvo from '../../img/turned_in_not.svg'
import iconePostSalvo from '../../img/turned_in.svg'
import {CompartilharPost} from '../CompartilharPost/CompartilharPost'
import IconeCompartilhar from '../../img/share.svg'
import {CompartilharMidias} from '../CompartilharPost/CompartilharMidias'

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  justify-content: space-between;
`

const LogoENome = styled.div`
  display: flex;
  align-items: center;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

const ShareComment = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70px;

`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    postSalvo: false,
    compartilhando: false
  }

  onClickSalvar = () => {
    this.setState({postSalvo: !this.state.postSalvo})
  }

  onClickCurtida = () => {
    console.log('Curtiu!')
    this.setState({curtido: !this.state.curtido})
    this.setState({numeroCurtidas: this.state.numeroCurtidas + 1})

    if (this.state.curtido) {
      this.setState({numeroCurtidas: this.state.numeroCurtidas - 1})
    }
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  sharePost = () => {
    this.setState({compartilhando: !this.state.compartilhando})
  }

  render() {

    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    let componenteCompartilhar

    if(this.state.compartilhando) {
      componenteCompartilhar = <CompartilharMidias sharePost={this.sharePost}/>
    }

    let iconeSalvo

    if(this.state.postSalvo) {
      iconeSalvo = iconePostSalvo
    } else {
      iconeSalvo = iconePostNaoSalvo
    }

    return (
    <PostContainer>
      <PostHeader>
        <LogoENome>
          <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
          <p>{this.props.nomeUsuario}</p>
        </LogoENome>
        <div>
           <IconeComContador
            icone={iconeSalvo}
            onClickIcone={this.onClickSalvar}
          />
        </div>
      </PostHeader>
    
      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />
        <ShareComment>
          <CompartilharPost
            icone={IconeCompartilhar}
            onShare={this.sharePost}
          />
          <IconeComContador
            icone={iconeComentario}
            onClickIcone={this.onClickComentario}
            valorContador={this.state.numeroComentarios}
          />
        </ShareComment>
      </PostFooter>
      {componenteCompartilhar}
      {componenteComentario}
    </PostContainer>
    )
  }
}

export default Post