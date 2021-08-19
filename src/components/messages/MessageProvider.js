import React, { useState, createContext } from "react"
import { apiUrl } from "../../index.js"

export const MessageContext = createContext()

export const MessageProvider = (props) => {
    const [messages, setMessages] = useState([])

    const getMessages = () => {
        return fetch(`${apiUrl}messages`)
            .then(res => res.json())
            .then(setMessages)
    }

    const getMessageById = (id) => {
        return fetch(`${apiUrl}messages/${id}`)
            .then(res => res.json())
    }

    const addMessage = messageObj => {
        return fetch(`${apiUrl}messages`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(messageObj)
        })
            .then(getMessages)
    }

    const deleteMessage = messageId => {
        return fetch(`${apiUrl}messages/${messageId}`, {
            method: "DELETE"
        })
            .then(getMessages)
    }

    const editMessage = message => {
        return fetch(`${apiUrl}messages/${message.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(message)
        })
            .then(getMessages)
    }

    return (
        <MessageContext.Provider value={{
            messages, getMessages, getMessageById, addMessage, deleteMessage, editMessage
        }}>
            {props.children}
        </MessageContext.Provider>
    )
}