import './App.css'
 import {FaBeer} from 'react-icons/fa';
import Reservation from './components/Reservation/Reservation';

function App() {

  return (
    <div className="App">
      <h1><FaBeer /> Beer Time - Landing Page <FaBeer /></h1>
      <h2>ASDASD</h2>
      <Reservation date={new Date()} />
    </div>
  )
}

export default App
