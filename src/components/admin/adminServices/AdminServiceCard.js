import React, { useContext } from "react"
import { useHistory } from "react-router-dom"
import { ServiceContext } from "../../services/ServiceProvider"
import "../../services/Service.css"

export const AdminServiceCard = ({ service }) => {
    const { deleteService } = useContext(ServiceContext)
    
    
    
    const history = useHistory()
    
    const handleDelete = () => {
        deleteService(service.id)
        .then(() => history.push("/services"))
    }
   

    return (
        <section className="service">
            <div className="service_Name">{service.name}</div>
            <div className="service_text">{service.textArea}</div>
            <button className="eventButton" onClick={() => {
              history.push(`/services/edit/${service.id}`)
            }}>Edit</button>
            <button id={service.id} onClick={handleDelete}>Delete Service</button>
        </section>
    )
}