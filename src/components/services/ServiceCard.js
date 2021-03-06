import React, { useContext, useState } from "react"
import { TagContext } from "../tags/TagProvider"
import "./Service.css"

export const ServiceCard = ({ service }) => {
    const currentUserId = parseInt(sessionStorage.getItem("App_user"))
    const { addTag, tags } = useContext(TagContext)
    
    const [tag, setTag] = useState({
        userId: currentUserId,
        serviceId: service.id
    })
    
    

    const handleAdd = (event) => {
        const newTag = { ...tag }
        newTag[event.target.id] = event.target.value
        newTag.serviceId = service.id
        let serviceId = tag.serviceId
        let userId = currentUserId
        const foundTag = tags.find(tag => serviceId === tag.serviceId && userId === tag.userId)
        if (foundTag) {
           alert("Service already selected")
        } else {
        setTag(newTag)
        addTag(tag)
        } 
    }
   

    return (
        <section className="service">
            <div className="service_Name">{service.name}</div>
            <div className="service_text">{service.textArea}</div>
            <button id={service.id} className="serviceButton" onClick={handleAdd}>Add Service</button>
           
        </section>
    )
}