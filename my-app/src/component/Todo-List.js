import { useState } from "react";
import { IoMdAddCircleOutline } from 'react-icons/io';
import { RiDeleteBin5Line } from 'react-icons/ri'

export default function ToDoList() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  const getItem = (e) => {
    console.log(e.target.value);
    setItem(e.target.value);
  };

  const addTask = (i) => {
    setList((i) => {
      return [...i, item];
    });
    setItem("");
  };

  const removeItem = (index) => {
    setItem(list.splice(index, 1));
  };

  return (
    <div>
      <h1 className="text-orange-950 font-bold bg-slate-200 mt-7 w-96 p-2 text-center rounded-lg mx-auto">
        To-Do List
      </h1>

      <div className="w-72 mx-auto flex mt-10 gap-x-2">
        <div class="w-72">
          <div class="relative h-10 w-full min-w-[200px]">
            <input
              onChange={getItem}
              value={item}
              class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeholder=" "
            />
            <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Add Task Here
            </label>
          </div>
        </div>

        {/* <input type="text" onChange={getItem} value={item} /> */}
        <div>
          <button
            onClick={addTask}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
          >
            <IoMdAddCircleOutline className="text-3xl"></IoMdAddCircleOutline>
          </button>
          </div>
          </div>
          <table class="table-auto mx-auto mt-5">
            <tbody>
              <tr>
              {list.map((a, index) => {
              return (
                <tr>
                <td key={index}>
                  {a} 
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 ml-4 rounded" onClick={() => removeItem(index)}>
                    <RiDeleteBin5Line></RiDeleteBin5Line>
                  </button>
                </td>
                </tr>
              );
            })}
              </tr>
              
            </tbody>
          </table>
    </div>
  );
}
