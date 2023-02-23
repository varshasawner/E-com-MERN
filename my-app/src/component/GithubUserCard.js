import { useState } from "react"

export default function GithubUserCard(){
    const [user, setUser] = useState("");
    const addUser = () => {
        // console.log(`https://api.github.com/users/${user}`)
        fetch(`https://api.github.com/users/${user}`)
        .then((res)=>{ console.log(res.url) });
    }


    return (
        <>
            <h1>Add Git Hub Users</h1>
            <input type="text" onChange={(e) => setUser(e.target.value)} value={user}/><button onClick={addUser}>Add</button>
            <div className="card">
                <img src="" />
                <p>UserName</p>
            </div>
        </>
    )
}