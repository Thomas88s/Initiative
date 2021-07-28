import React, { useContext } from "react"
import { useHistory } from "react-router-dom"
import { MessageContext } from "./MessageProvider"
import "./Message.css"

export const MessageCard = ({ message }) => {
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
            <p>{message.textArea}</p>
            <button id={message.id} onClick={handleDelete}>Delete</button>
        </section>
    )
}