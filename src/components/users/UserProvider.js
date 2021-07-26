import React, { useState, createContext } from "react"


export const UsersContext = createContext()
export const FriendProvider = (props) => {
    const [users, setUsers] = useState([])

    const getUsers = () => {
        return fetch("http://localhost:8088/users")
        .then(res => res.json())
        .then(setUsers)
    }

    return (
        <UsersContext.Provider value={{
             users, setUsers, getUsers
        }}>
            {props.children}
        </UsersContext.Provider>
    )


}