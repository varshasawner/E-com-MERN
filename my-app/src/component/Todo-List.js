import { useState } from "react"

export default function ToDoList() {
	const [item, setItem] = useState("");
	const [list, setList] = useState([]);

	const getItem = (e) => {
		setItem(e.target.value);
	}

	const addTask = () => {
		setList((i) => {
			return [...i, item]
		})
		setItem("");
	}

	const removeItem = (index) => {
		setItem(list.splice(index, 1));
	}

	return (
		<div>
			<h1>To-Do List</h1>
			<input type="text" onChange={getItem} value={item} />
			<button onClick={addTask}>Add</button>
			<ol>
				{
					list.map((a, index) => {
						return <li key={index}>{a} <button onClick={() => removeItem(index)}>delete</button></li>
					})
				}
			</ol>
		</div>
	)
}