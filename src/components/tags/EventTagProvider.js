import React, { useState, createContext } from "react"

export const EventTagContext = createContext()

export const EventTagProvider = (props) => {
    const [eventTags, setEventTags] = useState([])

    const getEventTags = () => {
        return fetch("http://localhost:8088/eventTags?_expand=event")
            .then(res => res.json())
            .then(setEventTags)
    }

    const getEventTagById = (id) => {
        return fetch(`http://localhost:8088/eventTags/${id}`)
            .then(res => res.json())
    }

    const addEventTag = eventTagObj => {
        return fetch("http://localhost:8088/eventTags", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(eventTagObj)
        })
            .then(getEventTags)
    }

    const deleteEventTag = eventTagId => {
        return fetch(`http://localhost:8088/eventTags/${eventTagId}`, {
            method: "DELETE"
        })
            .then(getEventTags)
    }

    return (
        <EventTagContext.Provider value={{
            eventTags, getEventTags, getEventTagById, addEventTag, deleteEventTag, 
        }}>
            {props.children}
        </EventTagContext.Provider>
    )
}