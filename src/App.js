import logo from './logo.svg';
import './App.css';
import{NavBar} from './componentes/NavBar'
import {BannerInicial} from './componentes/BannerInicial'
import { Habilidades } from './componentes/Habilidades';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <BannerInicial/>
      <Habilidades/>
    </div>
  );
}

export default App;
