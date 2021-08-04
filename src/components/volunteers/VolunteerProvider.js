import React, { useState, createContext } from "react"

export const VolunteerContext = createContext()

export const VolunteerProvider = (props) => {
    const [volunteers, setVolunteers] = useState([])

    const getVolunteers = () => {
        return fetch("http://localhost:8088/volunteers")
            .then(res => res.json())
            .then(setVolunteers)
    }

    const getVolunteersById = (id) => {
        return fetch(`http://localhost:8088/volunteers/${id}`)
            .then(res => res.json())
    }

    const addVolunteer = volunteerObj => {
        return fetch("http://localhost:8088/volunteers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(volunteerObj)
        })
            .then(getVolunteers)
    }

    const deleteVolunteer = volunteerId => {
        return fetch(`http://localhost:8088/volunteers/${volunteerId}`, {
            method: "DELETE"
        })
            .then(getVolunteers)
    }

    const editVolunteer = volunteer => {
        return fetch(`http://localhost:8088/volunteers/${volunteer.id}`, {
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
            volunteers, getVolunteers, getVolunteersById, addVolunteer, deleteVolunteer, editVolunteer
        }}>
            {props.children}
        </VolunteerContext.Provider>
    )
}