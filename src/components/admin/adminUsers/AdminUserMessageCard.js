import React, { useContext, useEffect }from "react"
import { UsersContext } from "../../users/UserProvider"

import "../../messages/Message.css"

export const AdminUserMessageCard = ({ message }) => {
    const { getUsers, users } = useContext(UsersContext)
    
    useEffect(() => {
        getUsers()
      }, [])
    
    const foundSender = users.find(user => (user.id === message.senderId))

    
    return (
        
        <section className="adminUserMessageCard">
            <p>Message from: {foundSender?.name}:</p>
            <p>{message.textArea}</p>
            <p>{message.date}</p>
        </section>
    )
}