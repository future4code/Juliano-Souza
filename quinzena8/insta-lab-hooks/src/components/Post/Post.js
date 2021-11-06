import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

const Post = (props) => {

  const [like, setLike] = useState(false)
  const [likeCount, setLikeCount] = useState(0)
  const [commentsCount, setCommentsCount] = useState(0)
  const [commenting, setCommenting] = useState(false)
  const [comments, setComments] = useState([])

  const onClickCurtida = () => {
    
    if (!like) {
      setLike(true)
      setLikeCount(likeCount + 1)
    } else {
      setLike(false)
      setLikeCount(likeCount - 1)
    }

  };

  const iconeCurtida = like ? iconeCoracaoPreto : iconeCoracaoBranco

  // 

  const onClickComentario = () => {
    setCommenting(!commenting)
  };

  const enviarComentario = (comentario) => {
    setCommenting(!commenting)
    setCommentsCount(commentsCount + 1)
    setComments([...comments, comentario])
  }

  const caixaDeComentario = commenting 
  ?
  <SecaoComentario enviarComentario={enviarComentario}/>
  : 
  <CommentContainer>
    {comments.map(comment => <p>{comment}</p>)}
  </CommentContainer>


  

  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={likeCount}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={commentsCount}
        />
      </PostFooter>
      {caixaDeComentario}
    </PostContainer>
  )
}

export default Post