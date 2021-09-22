import React from 'react';
import './App.css';
import { Etapa1 } from './components/Etapa1/Etapa1';
import { Etapa2 } from './components/Etapa2/Etapa2'
import { Etapa3 } from './components/Etapa3/Etapa3';
import { FimFormulario } from './components/FimFormulario/FimFormulario';


class App extends React.Component {

  state = {
    Etapa1: true,
    Etapa2: false,
    Etapa3: false,
    FimFormulario: false,
  }

  showEtapa1 = () => {
    if (this.state.Etapa1) {
      return (
        <Etapa1
          setEtapa2={this.setEtapa2}
          setEtapa3={this.setEtapa3}
        />
      )
    }
  }

  showEtapa2 = () => {
    if (this.state.Etapa2) {
      return (
        <Etapa2
          setEtapa3={this.setFimFormulario}
        />
      )
    }
  }

  showEtapa3 = () => {
    if (this.state.Etapa3) {
      return (
        <Etapa3
          setFimFormulario={this.setFimFormulario}
        />
      )
    }
  }

  showFimFormulario = () => {
    if (this.state.FimFormulario) {
      return (
        <FimFormulario/>
      )
    }
  }

  setEtapa2 = () => {
    this.setState({Etapa1: false})
    this.setState({Etapa2: true})
  }

  setEtapa3 = () => {
    this.setState({Etapa1: false})
    this.setState({Etapa2: false})
    this.setState({Etapa3: true})
  }

  setFimFormulario = () => {
    this.setState({Etapa2: false})
    this.setState({Etapa3: false})
    this.setState({FimFormulario: true})
  }
  
  render() {
    return (
      <div className="App">
        {this.showEtapa1()}
        {this.showEtapa2()}
        {this.showEtapa3()}
        {this.showFimFormulario()}
      </div>
    );
  }
}

export default App;
