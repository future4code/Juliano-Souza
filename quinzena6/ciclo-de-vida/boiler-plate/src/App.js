import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [],
      inputValue: '',
      filtro: '',
      searchInput: ''
    }

  componentDidUpdate() {
    localStorage.setItem(`Tasks`, `${JSON.stringify(this.state.tarefas)}`)
  };

  componentDidMount() {
    if (localStorage.getItem(`Tasks`)) {
      const newArr = JSON.parse(localStorage.getItem(`Tasks`))
      this.setState({tarefas: newArr})
    }
  };

  onChangeInput = (event) => {
    this.setState({inputValue: event.target.value})
  }

  criaTarefa = () => {
    const currentTask = [...this.state.tarefas]
    currentTask.push({id: Date.now(), texto: this.state.inputValue, completa: false})
    this.setState({tarefas: currentTask})
    this.setState({inputValue: ''})
  }

  selectTarefa = (id) => {
    const novaArray = this.state.tarefas.map(value => {
      if (value.id === id) {
        value.completa = true
      } 
      return value
    })

    this.setState({tarefas: novaArray})
  }

  onChangeFilter = (event) => {
    this.setState({filtro: event.target.value})
  }

  removeItem = (tarefa) => {
    const currentArr = [...this.state.tarefas]
    const task = currentArr.indexOf(tarefa)
    currentArr.splice(task, 1)
    this.setState({tarefas: currentArr})
  }

  removeAll = () => {
    this.setState({tarefas: []})
  }

  searchInput = (event) => {
    this.setState({searchInput: event.target.value})
  }

  searchTask = () => {
    const text = this.state.searchInput
    const taskFilter = this.state.tarefas.filter(value => {
      return value.texto.includes(text)
    })
    this.setState({tarefas: taskFilter})
  }

  sortAscending = () => {

    // const filterText = this.state.tarefas.map(value => value.texto)
    const filterText = this.state.tarefas.sort((a, b) => {
      if (a.value === b.value) {
        if (a.texto > b.texto) return 1;
        if (a.texto < b.texto) return -1;
      }
      return 0;
    })
    
    this.setState({tarefas: filterText})
  }

  sortDescending = () => {
    const filterText = this.state.tarefas.sort((a, b) => {
      if (a.value === b.value) {
        if (a.texto < b.texto) return 1;
        if (a.texto > b.texto) return -1;
      }
      return 0;
    })
    
    this.setState({tarefas: filterText})
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
        <input
          placeholder='Pesquise a tarefa'
          onChange={this.searchInput}
          value={this.state.searchInput}
        />
        <button onClick={this.searchTask}>Buscar</button>
        <button onClick={this.sortAscending}>Ordem Crescente</button>
        <button onClick={this.sortDescending}>Ordem Decrescente</button>
          {listaFiltrada.map(tarefa => {
            return (
              <div>
                <Tarefa
                  completa={tarefa.completa}
                  onClick={() => this.selectTarefa(tarefa.id)}
                >
                  {tarefa.texto}
                </Tarefa>
                <button onClick={() => this.removeItem(tarefa)}>Remover</button>
              </div>
            )
          })}
        <button onClick={() => this.removeAll()}>Apagar Tudo</button>
        </TarefaList>
      </div>
    )
  }
}

export default App
