import React, { useContext } from "react"
import { TagContext } from "../tags/TagProvider"
import "../services/Service.css"

export const UserServiceCard = ({ service }) => {
    const { deleteTag, tags} = useContext(TagContext)
    let foundTag = tags.find(tag => tag.serviceId === service.id) 
    
    const handleDelete = () => {
        deleteTag(foundTag.id)
           
    }
   
    return (
        <section className="service">
            <div className="service_Name">{service.name}</div>
            <div className="service_text">{service.textArea}</div>
            
            <button id={service.id} onClick={handleDelete}>Delete Service</button>
        </section>
    )
}