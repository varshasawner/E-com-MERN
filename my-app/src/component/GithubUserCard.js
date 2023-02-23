import { useState } from "react"

export default function GithubUserCard(){
    const [user, setUser] = useState("");
    const [userName, setUserName] = useState("");
    const [userImage, setUserImage] = useState("");
    const [userlogin, setUserLogin] = useState("");
    const [userRepo, setUserRepo] = useState("");
    const [getRepo, setGetRepo] = useState([]);


    const addUser = () => {
        // console.log(`https://api.github.com/users/${user}`)
        fetch(`https://api.github.com/users/${user}`)
        .then((res)=>{ return (res.json()) })
        .then((res)=>{ 
            // console.log(res);
            setUserName(res.name)
            setUserImage(res.avatar_url)
            setUserLogin(res.login)
            setUserRepo(res.repos_url);
            console.log(userRepo);
            fetch(userRepo)
            .then((res)=>{ return (res.json())})
            .then((res) => { setGetRepo(res)});

            console.log(getRepo)
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
                getRepo.map((i)=>{
                    return <li>{i}</li>
                })
                }</ol> */}
            </div>
        </>
    )
}