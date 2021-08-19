import React, { useState, createContext } from "react"
import { apiUrl } from "../../index.js"

export const UsersContext = createContext()
export const UserProvider = (props) => {
    const [users, setUsers] = useState([])

    const getUsers = () => {
        return fetch(`${apiUrl}users`)
        .then(res => res.json())
        .then(setUsers)
    }

    const getUserById = (id) => {
        return fetch(`${apiUrl}users/${id}`)
            .then(res => res.json())
    }



    return (
        <UsersContext.Provider value={{
             users, setUsers, getUsers, getUserById
        }}>
            {props.children}
        </UsersContext.Provider>
    )


}