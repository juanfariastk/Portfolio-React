//import logo from './logo.svg';
import './App.css';
import{ NavBar } from './componentes/NavBar'
import { BannerInicial } from './componentes/BannerInicial'
import { Habilidades } from './componentes/Habilidades';
import { Projetos } from './componentes/Projetos'
import { Contato } from './componentes/Contato'
import { Rodape } from './componentes/Rodape'
import Fade from 'react-reveal'
import Pulse from 'react-reveal/Pulse'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Fade Left>
        <BannerInicial/>
      </Fade>
      <Habilidades/>
      <Projetos/>
      <Pulse>
        <Contato/>
      </Pulse>
      <Rodape/>
    </div>
  );
}

export default App;
