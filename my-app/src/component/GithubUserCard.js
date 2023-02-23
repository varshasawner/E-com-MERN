import { useState } from "react"

export default function GithubUserCard(){
    const [user, setUser] = useState("");
    const [userName, setUserName] = useState("");
    const [userImage, setUserImage] = useState("");
    // const [userRepo, setUserRepo] = useState([]);


    const addUser = () => {
        // console.log(`https://api.github.com/users/${user}`)
        fetch(`https://api.github.com/users/${user}`)
        .then((res)=>{ return (res.json()) })
        .then((res)=>{ 
            // console.log(res);
            setUserName(res.name)
            setUserImage(res.avatar_url)
            // setUserRepo(res.repos);
            // console.log(userRepo)
        });
    }


    return (
        <>
            <h1>Add Git Hub Users</h1>
            <input type="text" onChange={(e) => setUser(e.target.value)} value={user}/><button onClick={addUser}>Add</button>
            <div className="card">
                <img src={userImage} />
                <p>{userName}</p>
                {/* <ol>
                    {
                userRepo.map((i)=>{
                    <li>{i[0]}</li>
                })
                }</ol> */}
            </div>
        </>
    )
}