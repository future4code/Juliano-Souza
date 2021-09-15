import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import photo from './components/Images/photo.jpg'
import './Font/font.css'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={photo}
          nome="Juliano" 
          descricao="Oi, eu sou o Juliano. Sou aluno da Labenu. Adoro codar, ver séries e filmes. Fã de R&B e Jazz."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      <div>
        <CardPequeno
          icon="https://img-premium.flaticon.com/png/512/1804/premium/1804925.png?token=exp=1631225686~hmac=efd554ae0d72cb667fdb766906b71c8c"
          label="E-mail:"
          email="hefele3564@sicmag.com"
        />
        <CardPequeno
          icon="https://image.flaticon.com/icons/png/512/484/484167.png"
          label="Endereço:"
          address="São Tomé de Paripe - Salvador - BA"
        
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://computerworld.com.br/wp-content/uploads/2019/08/algar-tech.jpg" 
          nome="Algar Tech" 
          descricao="Atendente JR" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
