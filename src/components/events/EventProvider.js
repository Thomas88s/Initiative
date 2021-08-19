import React, { useState, createContext } from "react"
import { apiUrl } from "../../index.js"

 export const EventContext = createContext()

 export const EventProvider = (props) => {
    const [events, setEvents] = useState([])

    const getEvents = () => {
        return fetch(`${apiUrl}events`)
        .then(res => res.json())
        .then(setEvents)
    }
    const getEventById = (id) => {
        return fetch(`${apiUrl}events/${id}`)
        .then(res => res.json())
        }


    const addEvent = eventObj => {
        return fetch(`${apiUrl}events`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(eventObj)
        })
        .then(getEvents)
          
    }

    const deleteEvent = eventId => {
        return fetch(`${apiUrl}events/${eventId}`, {
            method: "DELETE"
        })
            .then(getEvents)
    }

    const updateEvent = event => {
        return fetch(`${apiUrl}events/${event.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(event)
        })
          .then(getEvents)
      }

    

    return (
        <EventContext.Provider value={{
            events, getEvents, addEvent, deleteEvent, updateEvent,  getEventById
        }}>
            {props.children}
        </EventContext.Provider>
    )
}