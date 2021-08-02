import React, { useState, createContext } from "react"

export const MessageTagContext = createContext()

export const MessageTagProvider = (props) => {
    const [messageTags, setMessageTags] = useState([])

    const getMessageTags = () => {
        return fetch("http://localhost:8088/messageTags?_expand=message")
            .then(res => res.json())
            .then(setMessageTags)
    }

    const getMessageTagById = (id) => {
        return fetch(`http://localhost:8088/messageTags/${id}`)
            .then(res => res.json())
    }

    const addMessageTag = eventTagObj => {
        return fetch("http://localhost:8088/messageTags", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(eventTagObj)
        })
            .then(getMessageTags)
    }

    const deleteMessageTag = messageTagId => {
        return fetch(`http://localhost:8088/messageTags/${messageTagId}`, {
            method: "DELETE"
        })
            .then(getMessageTags)
    }

    return (
        <MessageTagContext.Provider value={{
            messageTags, getMessageTags, getMessageTagById, addMessageTag, deleteMessageTag, 
        }}>
            {props.children}
        </MessageTagContext.Provider>
    )
}