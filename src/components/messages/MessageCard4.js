import React, { useContext, useEffect } from "react"
import { UsersContext } from "../users/UserProvider"
import "./Message.css"

export const MessageCard4 = ({ message }) => {
    const { users, getUsers } = useContext(UsersContext)
    const foundReceiver = users.find(user => (user.id === message.receiverId))

    useEffect(() => {
        getUsers()
      }, [])

  

    
    return (
        <section className="message">
            <p>To: {foundReceiver?.name}:</p>
            <p className="messageText">{message.textArea}</p>
            <p>{message.date}</p>
           
        </section>
    )
}