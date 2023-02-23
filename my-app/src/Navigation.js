import ToDoList from './component/To-doList';
import './App.css';
import {useState} from 'react';
import Calculator from './component/Calculator';
import GithubUserCard from './component/GithubUserCard';

function Navigation() {
  const [todo, setTodo] = useState(false);
  const [calculator, setCalculator] = useState(false);
  const [github, setGithub] = useState(false);

  return (
    <div className="App">

      {/* {
        todo && <ToDoList /> 
      } */}

      {
        github && <GithubUserCard />
      }

      {/* {
        calculator && <Calculator />
      } */}
      {/* <button onClick={()=>setTodo(true)}>To-Do List</button> */}
      {/* <button onClick={()=>setCalculator(true)}>Calculator</button> */}
      <button onClick={()=>setGithub(true)}>GitHUb</button>
      
    </div>
  );
}

export default Navigation;
