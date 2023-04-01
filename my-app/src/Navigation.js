import ToDoList from './component/Todo-List';
import './App.css';
import {useState} from 'react';
import Calculator from './component/Calculator';
import GithubUserCard from './component/GithubUserCard';
import Cart from './component/Cart';
import MusicPlayer from './component/MusicPlayer';
import Clock from './component/Clock';

function Navigation() {
  const [todo, setTodo] = useState(false);
  const [calculator, setCalculator] = useState(false);
  const [github, setGithub] = useState(false);
  const [player, setPlayer] = useState(false);
  const [activeComponent, setActiveComponent] = useState("todo");

  return (
    <div className="App">
      <nav>
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

      <a href="#" onClick={()=>{
        setActiveComponent("cart")
        window.history.pushState('cart', 'Cart', '/cart')
      }}>Cart</a>

      <a href="#" onClick={()=>{
        setActiveComponent("player")
        window.history.pushState('player', 'Player', '/player')
      }}>Music Player</a>

      <a href="#" onClick={()=>{
        setActiveComponent("clock")
        window.history.pushState('clock', 'Clock', '/clock')
      }}>Clock</a>

      </nav>

      {
        activeComponent === "todo" && <ToDoList /> 
      }

      {
        activeComponent === "github" && <GithubUserCard />
      }

      {
        activeComponent === "calculator" && <Calculator />
      }

      {
        activeComponent === "cart" && <Cart />
      }

      {
        activeComponent === "player" && <MusicPlayer />
      }

      {
        activeComponent === "clock" && <Clock />
      }
     
      
    </div>
  );
}

export default Navigation;
