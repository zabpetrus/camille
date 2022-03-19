import {Home} from './pages/Home/Home';
import {About} from './pages/About/About';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

/** 
 * Uma coisa muito importante aqui:
 * Ao se importar um arquivo tem que tomar muito cuidado pra não dar erro:
 * Se no import for colocar o nome do componente dentro de chaves, a classe referente não poderá ter a 
 * palavra-chave default; No import, se o nome do componente não está entre chaves, é porque na classe referente
 * tem a palavra-chave default: 
 * 
 *  import {Home} from './pages/Home/Home' <--> export class Home extends React.Component
 *  import Navbar from './components/Navbar/Navbar' <--> export default class Navbar extends React.Component
 * 
 * Depois muitas tentativas é que descobri isso;
 * E outra coisa:
 * Se liguem na versão do react-router-dom. Estou usando a versão 6.2.2 que é muito diferente das anteriores
 * Vejam https://www.youtube.com/watch?v=zEQiNFAwDGo
 * Se não funcionar alguma coisa é porque houve uma atualização extrema e vou consertar...
 * 
 */


function App() {
  return (
    <BrowserRouter>
    <div>      
      <Header/>
      <Navbar/>
      <main>
        <Routes>        
          <Route exact path='/' element={< Home />} ></Route>  
          <Route path='/about' element={< About />}></Route>
        </Routes> 
      </main>
      <Footer/>      
    </div>
    </BrowserRouter>
   
  );
}

export default App;
