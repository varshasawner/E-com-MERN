import Navigation from './Navigation';
import './App.css';
import {useState} from 'react';
import Calculator from './component/Calculator';

function App() {
  const [todo, setTodo] = useState(false);
  return (
    <div className="App">

     <Navigation />
      
    </div>
  );
}

export default App;
