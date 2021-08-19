import React, { useState, createContext } from "react"
import { apiUrl } from "../../index.js"

export const EventTagContext = createContext()

export const EventTagProvider = (props) => {
    const [eventTags, setEventTags] = useState([])

    const getEventTags = () => {
        return fetch(`${apiUrl}eventTags?_expand=event`)
            .then(res => res.json())
            .then(setEventTags)
    }

    const getEventTagById = (id) => {
        return fetch(`${apiUrl}eventTags/${id}`)
            .then(res => res.json())
    }

    const addEventTag = eventTagObj => {
        return fetch(`${apiUrl}eventTags`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(eventTagObj)
        })
            .then(getEventTags)
    }

    const deleteEventTag = eventTagId => {
        return fetch(`${apiUrl}eventTags/${eventTagId}`, {
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