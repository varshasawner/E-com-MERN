import Navigation from './Navigation';
import './App.css';
import {useState} from 'react';
import Calculator from './component/Calculator';
import Navbar from './Navbar';

function App() {
  const [todo, setTodo] = useState(false);
  return (
    <div className="App">

     {/* <Navbar />
     <br>
     </br><br></br><br></br> */}
     <Navigation />
    
    </div>
  );
}

export default App;
