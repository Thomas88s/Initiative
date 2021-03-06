import React, { useState, createContext } from "react"
import { apiUrl } from "../../index.js"


export const VolunteerContext = createContext()

export const VolunteerProvider = (props) => {
    const [volunteers, setVolunteers] = useState([])

    const getVolunteers = () => {
        return fetch(`${apiUrl}volunteers?_expand=user`)
            .then(res => res.json())
            .then(setVolunteers)
    }

    const getVolunteerById = (id) => {
        return fetch(`${apiUrl}volunteers/${id}`)
            .then(res => res.json())
    }

    const addVolunteer = volunteerObj => {
        return fetch(`${apiUrl}volunteers`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(volunteerObj)
        })
            .then(getVolunteers)
    }

    const deleteVolunteer = volunteerId => {
        return fetch(`${apiUrl}volunteers/${volunteerId}`, {
            method: "DELETE"
        })
            .then(getVolunteers)
    }

    const editVolunteer = volunteer => {
        return fetch(`${apiUrl}volunteers/${volunteer.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(volunteer)
        })
            .then(getVolunteers)
    }

    return (
        <VolunteerContext.Provider value={{
            volunteers, getVolunteers, getVolunteerById, addVolunteer, deleteVolunteer, editVolunteer
        }}>
            {props.children}
        </VolunteerContext.Provider>
    )
}