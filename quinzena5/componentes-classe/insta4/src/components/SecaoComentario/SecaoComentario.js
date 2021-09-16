import React, {Component} from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
`

export class SecaoComentario extends Component {
	state = {
		textoComentario: ''
	}

	onChangeComentario = event => this.setState({textoComentario: event.target.value})

	showComment = () => {
		return (
			<p>{this.state.textoComentario}</p>
		)
	}

	render() {
		return (
		<CommentContainer>
			<InputComentario
				placeholder={'Comentário'}
				value={this.state.textoComentario}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
			{this.showComment}
		</CommentContainer>
		)
	}
}
