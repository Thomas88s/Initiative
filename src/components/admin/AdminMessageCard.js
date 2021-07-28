import React, { useContext } from "react"
import { useHistory } from "react-router-dom"
import { MessageContext } from "../messages/MessageProvider"
import { UsersContext } from "../users/UserProvider"
import "../messages/Message.css"

export const AdminMessageCard = ({ message }) => {
    const { deleteMessage } = useContext(MessageContext)
    const { users } = useContext(UsersContext)
    const history = useHistory()

    const foundSender = users.find(user => (user.id === message.senderId))

    const handleDelete = () => {
        deleteMessage(message.id)
            .then(() => {
               
            })
    }

    return (
        <section className="message">
            <p>{message.textArea}</p>
            <p>Message From: {foundSender.name}</p>
            <button id={message.id} onClick={handleDelete}>Delete</button>
        </section>
    )
}