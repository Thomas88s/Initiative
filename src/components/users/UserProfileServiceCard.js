import React from "react"
import "../services/Service.css"

export const UserProfileServiceCard = ({ service }) => {
    
    

    return (
        <section className="service">
            <h4 className="service_Name">{service.name}</h4>
            <div className="service_text">{service.textArea}</div>
            
           
        </section>
    )
}