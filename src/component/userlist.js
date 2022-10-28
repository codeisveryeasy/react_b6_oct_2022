import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

function UserList() {

    const [allusers, updateAllUsers] = useState([])

    useEffect(()=>{
        callUserApi()
    }, [])

    const callUserApi = ()=>{
        console.log("I will always be called once when the component is being rendered. I will never be called again. I will be called again only when component is re-rendered i.e on page-reload.")
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response)=>{
                console.log(response)
                console.log(response.data)
                updateAllUsers(response.data)

            })
    }

    const renderAllUsers=()=>{
      return allusers.map((user, index)=>{
        console.log(index + ". " + user.name)
        return (
            <li key={index}>
                {user.name}
            </li>
        )
      })
    }


    return ( 
        <div>
            <h1>List of users (consume API using axios)</h1>
            <h2>Length of allusers: {allusers.length} </h2>
            <ol>
                 {renderAllUsers()}
            </ol>
        </div>
     );
}

export default UserList;