import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const CreatePostContainer = styled.div`
  width: 40%;
  height: 40vh;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`

const Input = styled.input`
  width: 80%;
  height: 20%;
  margin-bottom: 5px;
  border: none;
  outline: none;
  border-radius: 5px;
  font-size: 1em;
  padding: 0 .75em;
  border: 2px solid #00000070;
`

const Button = styled.button`
  width: 30%;
  height: 20%;
  border: none;
  outline: none;
  border-radius: 5px;
  font-size: 1em;
  border: 2px solid #00000070;
  &:hover {
    cursor: pointer;
  }
`

class App extends React.Component {

  state = {
    post: [
      {
        nomeUsuario: 'paulinha',
        fotoUsuario: 'https://picsum.photos/50?random=1',
        fotoPost: 'https://picsum.photos/200/150?random=1'
      },
      {
        nomeUsuario: 'amandinha',
        fotoUsuario: 'https://picsum.photos/50?random=2',
        fotoPost: 'https://picsum.photos/200/150?random=2',
      },
      {
        nomeUsuario: 'claudinha',
        fotoUsuario: 'https://picsum.photos/50?random=3',
        fotoPost: 'https://picsum.photos/200/150?random=3',
      }
    ],
    userNameTyped: '',
    userLinkTyped:'',
    linkPicturePost: ''
  }

  nameTyped = event => this.setState({userNameTyped: event.target.value})

  linkTyped = event => this.setState({userLinkTyped: event.target.value})
  
  picturePost = event => this.setState({linkPicturePost: event.target.value})
  

  createPost = () => {

    const yetArr = [...this.state.post]
    yetArr.push({
      nomeUsuario: this.state.userNameTyped,
      fotoUsuario: `https://picsum.photos/50?random=${Math.floor(Math.random() * 100)}`,
      fotoPost: `https://picsum.photos/200/150?random=${Math.floor(Math.random() * 100)}`
    })
    this.setState({post: yetArr})

  }

  render() {
    return (
      <MainContainer>
        {this.state.post.map((value, i) => {
          return (
            <Post
              nomeUsuario={value.nomeUsuario}
              fotoUsuario={value.fotoUsuario}
              fotoPost={value.fotoPost}
            />
          )
        })}
        <CreatePostContainer>
          <p>Links gerados automaticamente, apenas digite o nome :)</p>
          <Input
            onChange={this.nameTyped}
            value={this.state.userNameTyped}
            placeholder='Usuário'

          />
          <Input
            onChange={this.linkTyped}
            value={this.state.userLinkTyped}
            placeholder='Link foto usuário'

          />
          <Input
            onChange={this.picturePost}
            value={this.state.linkPicturePost}
            placeholder='Foto do Post'
          />
          <Button onClick={this.createPost}>Enviar</Button>
        </CreatePostContainer>
      </MainContainer>

    );
  }
}

export default App;
