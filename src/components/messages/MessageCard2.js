import React, { useContext } from "react"
import { useHistory } from "react-router-dom"
import { MessageContext } from "./MessageProvider"
import "./Message.css"

export const MessageCard2 = ({ message }) => {
    const { deleteMessage } = useContext(MessageContext)
    const history = useHistory()
    



    const handleDelete = () => {
        deleteMessage(message.id)
            .then(() => {
                history.push("/messages")
            })
    }

    
    return (
        <section className="message">
            <p>To Admin:</p>
            <p>{message.textArea}</p>
            <p>{message.date}</p>
            <button id={message.id} onClick={handleDelete}>Delete</button>
        </section>
    )
}