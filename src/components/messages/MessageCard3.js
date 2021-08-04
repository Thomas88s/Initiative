import React, { useContext, useEffect } from "react"
import { UsersContext } from "../users/UserProvider"
import "./Message.css"

export const MessageCard3 = ({ message }) => {
    const { users, getUsers } = useContext(UsersContext)
    const foundSender = users.find(user => (user.id === message.senderId))

    useEffect(() => {
        getUsers()
      }, [])

  

    
    return (
        <section className="message">
            <p>From: {foundSender?.name}:</p>
            <p>{message.textArea}</p>
            <p>{message.date}</p>
           
        </section>
    )
}