import ToDoList from './component/Todo-List';
import './App.css';
import {useState} from 'react';
import Calculator from './component/Calculator';
import GithubUserCard from './component/GithubUserCard';

function Navigation() {
  const [todo, setTodo] = useState(false);
  const [calculator, setCalculator] = useState(false);
  const [github, setGithub] = useState(false);
  const [activeComponent, setActiveComponent] = useState("todo");

  return (
    <div className="App">

      {
        activeComponent === "todo" && <ToDoList /> 
      }

      {
        activeComponent === "github" && <GithubUserCard />
      }

      {
        activeComponent === "calculator" && <Calculator />
      }
      <a href="#" onClick={()=>{
        setActiveComponent("todo")
        window.history.pushState('todo', 'Todo', '/todo')
      }}>To-Do List</a>
      <a href="#" onClick={()=>{
        setActiveComponent("calculator")
        window.history.pushState('calculator', 'Calculator', '/calculator')
      }}>Calculator</a>
      <a href="#" onClick={()=>{
        setActiveComponent("github")
        window.history.pushState('github', 'Github', '/github')
      }}>GitHUb</a>
      
    </div>
  );
}

export default Navigation;
