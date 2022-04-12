import './App.css'
 import {FaBeer} from 'react-icons/fa';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { UbicacionContacto } from "../src/components/UbicacionyContacto/UbicacionContacto";
import { Presentation } from './components/presentation/presentation';

function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <h1><FaBeer /> Beer Time - Landing Page <FaBeer /></h1>
      <h2>ASDASD</h2>
      <Presentation/>
      <UbicacionContacto></UbicacionContacto>
      <Footer></Footer>
    </div>
  )
}

export default App
