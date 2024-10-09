
import { useEffect, useState } from "react"
import "./Friends.css"
import Friend from "./Friend"
export default function Friends() {
    const [Friends, SetFriends] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => SetFriends(data))
    }, [])
    return (
        <div className="box">
            <h2>Friends : {Friends.length}</h2>
            {
                Friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    )
}

/* 
1. use state to hold data
2. use Effect with dependency array
*/

