import React, { useContext, useState } from "react"
import { useHistory } from "react-router-dom"
import { ServiceContext } from "../services/ServiceProvider"
import { TagContext } from "../tags/TagProvider"
import "../services/Service.css"

export const UserServiceCard = ({ service }) => {
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
   

    return (
        <section className="service">
            <div className="service_Name">{service.name}</div>
            <div className="service_text">{service.textArea}</div>
            
            <button id={service.id} onClick={handleDelete}>Delete Service</button>
        </section>
    )
}