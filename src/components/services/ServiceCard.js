import React, { useContext, useState } from "react"
import { useHistory } from "react-router-dom"
import { ServiceContext } from "./ServiceProvider"
import { TagContext } from "../tags/TagProvider"
import "./Service.css"

export const ServiceCard = ({ service }) => {
    const { deleteService } = useContext(ServiceContext)
    const currentUserId = parseInt(sessionStorage.getItem("App_user"))
    
    const [tag, setTag] = useState({
        userId: currentUserId,
        serviceId: service.id
    })
    
    const { addTag } = useContext(TagContext)
    const history = useHistory()
    
    const handleDelete = () => {
        deleteService(service.id)
            .then(() => {
                history.push("/services")
            })
    }

    const handleAdd = (event) => {
        const newTag = { ...tag }
        newTag[event.target.id] = event.target.value
        newTag.serviceId = service.id
        setTag(newTag)
        addTag(tag)
            
    }
   

    return (
        <section className="service">
            <div className="service_Name">{service.name}</div>
            <div className="service_text">{service.textArea}</div>
            <button id={service.id} onClick={handleAdd}>Add Service</button>
            <button id={service.id} onClick={handleDelete}>Delete Service</button>
        </section>
    )
}