import React, { useContext, useEffect } from "react"
import { MessageContext } from "../../messages/MessageProvider"
import { UsersContext } from "../../users/UserProvider"
import "../../messages/Message.css"

export const AdminMessageCard = ({ message }) => {
    const { deleteMessage } = useContext(MessageContext)
    const { getUsers, users } = useContext(UsersContext)
    
    useEffect(() => {
        getUsers()
      }, [])
    
    const foundSender = users.find(user => (user.id === message.senderId))

    
    const handleDelete = () => {
        deleteMessage(message.id)
            .then(() => {
              
            })
    }

    return (
        <div className="adminMessagesReceivedCard">
            <section className="receivedMessage">
                <p>{message.textArea}</p>
                <p>Message From: {foundSender?.name}</p>
                <p>{message.date}</p>
                <button id={message.id} onClick={handleDelete}>Delete</button>
            </section>
        </div>
    )
}