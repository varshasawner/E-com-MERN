import ToDoList from './component/To-doList';
import './App.css';
import {useState} from 'react';
import Calculator from './component/Calculator';

function Navigation() {
  const [todo, setTodo] = useState(false);
  const [calculator, setCalculator] = useState(false);
  return (
    <div className="App">

      {/* {
        todo && <ToDoList /> 
      } */}
      {
        calculator && <Calculator />
      }
      {/* <button onClick={()=>setTodo(true)}>To-Do List</button> */}
      <button onClick={()=>setCalculator(true)}>Calculator</button>
      
    </div>
  );
}

export default Navigation;
