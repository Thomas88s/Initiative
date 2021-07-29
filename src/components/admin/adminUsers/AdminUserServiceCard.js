import React from "react"
import "../../services/Service.css"

export const AdminUserServiceCard = ({ service }) => {
   

    return (
        <section className="service">
            <div className="service_Name">{service.name}</div>
            <div className="service_text">{service.textArea}</div>
        
        </section>
    )
}