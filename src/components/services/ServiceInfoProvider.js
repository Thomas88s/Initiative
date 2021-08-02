import React, { useState, createContext } from "react"

export const ServiceInfoContext = createContext()

export const ServiceInfoProvider = (props) => {
    const [servicesInfo, setServicesInfo] = useState([])

    const getServicesInfo = () => {
        return fetch("http://localhost:8088/servicesInfo")
            .then(res => res.json())
            .then(setServicesInfo)
    }

    const getServiceInfoById = (id) => {
        return fetch(`http://localhost:8088/servicesInfo/${id}`)
            .then(res => res.json())
    }

    const addServiceInfo = serviceObj => {
        return fetch("http://localhost:8088/servicesInfo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(serviceObj)
        })
            .then(getServicesInfo)
    }

    const deleteServiceInfo = serviceInfoId => {
        return fetch(`http://localhost:8088/servicesInfo/${serviceInfoId}`, {
            method: "DELETE"
        })
            .then(getServicesInfo)
    }

    const editServiceInfo = service => {
        return fetch(`http://localhost:8088/servicesInfo/${serviceInfo.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(service)
        })
            .then(getServicesInfo)
    }

    return (
        <ServiceInfoContext.Provider value={{
            servicesInfo, getServicesInfo, getServiceInfoById, addServiceInfo, deleteServiceInfo, editServiceInfo
        }}>
            {props.children}
        </ServiceInfoContext.Provider>
    )
}