import ToDoList from "./component/Todo-List";
import "./App.css";
import { useState } from "react";
import Calculator from "./component/Calculator";
import GithubUserCard from "./component/GithubUserCard";
import Cart from "./component/Cart";
import MusicPlayer from "./component/MusicPlayer";
// import Clock from './component/Clock_one';
import Anologclock from "./component/AnologClock";
import Cart1 from "./component/Cart1.js";

function Navigation() {
  const [todo, setTodo] = useState(false);
  const [activeComponent, setActiveComponent] = useState("todo");

  return (
    <div className="">
      <nav className="bg-gray-800">
        <div className="relative flex h-16 items-center justify-between mx-6">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex flex-shrink-0 items-center">
              <img
                class="block h-8 w-auto lg:hidden"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
              <img
                class="hidden h-8 w-auto lg:block"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
            </div>
            <ul
              class="relative flex list-none flex-wrap rounded-lg bg-blue-gray-50/60 p-1"
              data-tabs="tabs"
              role="list"
            >
              <li class="z-30 flex-auto text-center">
                <a
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium ml-4"
                  href="#"
                  onClick={() => {
                    setActiveComponent("todo");
                    window.history.pushState("todo", "Todo", "/todo");
                  }}
                >
                  To-Do List
                </a>
              </li>
              <li class="z-30 flex-auto text-center">
                <a
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  href="#"
                  onClick={() => {
                    setActiveComponent("calculator");
                    window.history.pushState(
                      "calculator",
                      "Calculator",
                      "/calculator"
                    );
                  }}
                >
                  Calculator
                </a>
              </li>
              <li class="z-30 flex-auto text-center">
                <a
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  href="#"
                  onClick={() => {
                    setActiveComponent("github");
                    window.history.pushState("github", "Github", "/github");
                  }}
                >
                  GitHUb
                </a>
              </li>

              <li class="z-30 flex-auto text-center">
                <a
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  href="#"
                  onClick={() => {
                    setActiveComponent("cart");
                    window.history.pushState("cart", "Cart", "/cart");
                  }}
                >
                  Cart
                </a>
              </li>

              <li class="z-30 flex-auto text-center">
                <a
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  href="#"
                  onClick={() => {
                    setActiveComponent("player");
                    window.history.pushState("player", "Player", "/player");
                  }}
                >
                  Music Player
                </a>
              </li>

              {/* <a href="#" onClick={()=>{
        setActiveComponent("clock")
        window.history.pushState('clock', 'Clock', '/clock')
      }}>Clock</a> */}

              <li class="z-30 flex-auto text-center">
                <a
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  href="#"
                  onClick={() => {
                    setActiveComponent("anologclock");
                    window.history.pushState(
                      "anologclock",
                      "Anologclock",
                      "/anologclock"
                    );
                  }}
                >
                  Anolog Clock
                </a>
              </li>
            </ul>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="relative ml-3">
              <a
                href="https://github.com/varshasawner"
                className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium ml-4"
              >
                Varsha Saxena
              </a>
            </div>
          </div>
        </div>
      </nav>

      {activeComponent === "todo" && <ToDoList />}

      {activeComponent === "github" && <GithubUserCard />}

      {activeComponent === "calculator" && <Calculator />}

      {activeComponent === "cart" && <Cart1 />}

      {activeComponent === "player" && <MusicPlayer />}

      {
        // activeComponent === "clock" && <Clock />
      }

      {activeComponent === "anologclock" && <Anologclock />}
    </div>
  );
}

export default Navigation;
