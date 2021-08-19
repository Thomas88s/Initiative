import React, { useState, createContext } from "react"
import { apiUrl } from "../../index.js"

export const ServiceContext = createContext()

export const ServiceProvider = (props) => {
    const [services, setServices] = useState([])

    const getServices = () => {
        return fetch(`${apiUrl}services`)
            .then(res => res.json())
            .then(setServices)
    }

    const getServiceById = (id) => {
        return fetch(`${apiUrl}services/${id}`)
            .then(res => res.json())
    }

    const addService = serviceObj => {
        return fetch(`${apiUrl}services`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(serviceObj)
        })
            .then(getServices)
    }

    const deleteService = serviceId => {
        return fetch(`${apiUrl}services/${serviceId}`, {
            method: "DELETE"
        })
            .then(getServices)
    }

    const editService = service => {
        return fetch(`${apiUrl}services/${service.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(service)
        })
            .then(getServices)
    }

    return (
        <ServiceContext.Provider value={{
            services, getServices, getServiceById, addService, deleteService, editService
        }}>
            {props.children}
        </ServiceContext.Provider>
    )
}