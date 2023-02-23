import { useState } from "react"

export default function GithubUserCard(){
    const [user, setUser] = useState("");
    const [userName, setUserName] = useState("");
    const [userImage, setUserImage] = useState("");
    const [userlogin, setUserLogin] = useState("");
    // const [userRepo, setUserRepo] = useState([]);


    const addUser = () => {
        // console.log(`https://api.github.com/users/${user}`)
        fetch(`https://api.github.com/users/${user}`)
        .then((res)=>{ return (res.json()) })
        .then((res)=>{ 
            // console.log(res);
            setUserName(res.name)
            setUserImage(res.avatar_url)
            setUserLogin(res.login)
            // setUserRepo(res.repos);
            // console.log(userRepo)
        });
    }

    let a = `https://www.github.com/${userlogin}`


    return (
        <>
            <h1>Add Git Hub Users</h1>
            <input type="text" onChange={(e) => setUser(e.target.value)} value={user}/><button onClick={addUser}>Add</button>
            <div className="card">
                <a href={a}><img src={userImage} /></a>
                
                <p>{userName}</p>
                {/* <ol>
                    {
                userRepo.map((i)=>{
                    <li>{i[0].id}</li>
                })
                }</ol> */}
            </div>
        </>
    )
}