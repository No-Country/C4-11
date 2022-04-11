import './App.css'
 import {FaBeer} from 'react-icons/fa';
import Navbar from './components/Navbar/Navbar';
import Carrousel from './components/Carrousel/Carrousel';
import About from './components/about/about';
import Menu from './components/Menu/Menu';
import Cervezas from './components/Dishes/Cervezas';
import Picada from './components/Dishes/Picada';
import Pizza from './components/Dishes/Pizza';
import Login from './components/Login/Login';



function App() {

  return (
    <div className="App">
       <Navbar />
       <Carrousel />
       <About />
       <Menu />
       <Cervezas />
       <Picada />
       <Pizza />
      <h1><FaBeer /> Beer Time - Landing Page <FaBeer /></h1>
      <h2>ASDASD</h2>
      <Login />
      <br/><br/><br/>
    </div>
  )
}

export default App
