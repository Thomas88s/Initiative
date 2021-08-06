import React, { useContext } from "react"
import { useHistory } from "react-router-dom"
import { ServiceContext } from "../../services/ServiceProvider"
import "../../services/Service.css"

export const AdminServiceCard = ({ service }) => {
    const { deleteService } = useContext(ServiceContext)
    
    
    
    const history = useHistory()
    
    const handleDelete = () => {
        deleteService(service.id)
        .then(() => {
            history.push("/admin/services0sH0AOSszsP5GEUh")
          })
    }
   

    return (
        <section className="service">
            <div className="service_Name">{service.name}</div>
            <div className="service_text">{service.textArea}</div>
            <button className="serviceButton" onClick={() => {
              history.push(`/services/edit/${service.id}`)
            }}>Edit Service</button>
            <button id={service.id} onClick={handleDelete}>Delete Service</button>
        </section>
    )
}