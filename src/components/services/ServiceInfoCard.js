import React from "react"

import "./Service.css"

export const ServiceInfoCard = ({ serviceInfo }) => {
   
    
   
    
   

    return (
        <section className="service">
            <div className="service_Name">{serviceInfo.title}</div>
            <div className="service_text">{serviceInfo.textArea}</div>
           
           
        </section>
    )
}