import React, { useContext, useEffect } from "react"
import { MessageContext } from "../../messages/MessageProvider"
import { UsersContext } from "../../users/UserProvider"
import "../../messages/Message.css"

export const AdminMessageCard2 = ({ message }) => {
    const { deleteMessage } = useContext(MessageContext)
    const { getUsers, users } = useContext(UsersContext)
    
    useEffect(() => {
        getUsers()
      }, [])
    
    const foundReceiver = users.find(user => (user.id === message.receiverId))

    
    const handleDelete = () => {
        deleteMessage(message.id)
            .then(() => {
              
            })
    }

    return (
        <div className="adminMessagesSentCard">
            <section className="SentMessage">
                <p>{message.textArea}</p>
                <p>Sent To: {foundReceiver?.name}</p>
                <p>{message.date}</p>
                <button id={message.id} onClick={handleDelete}>Delete</button>
            </section>
        </div>
    )
}