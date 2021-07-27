import React, { useContext } from "react"
import { useHistory } from "react-router-dom"
import { ServiceContext } from "./ServiceProvider"
import "./Service.css"

export const ServiceCard = ({ service }) => {
    const { deleteService } = useContext(ServiceContext)
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
            <label htmlFor="checkbox">Add</label><br></br>
            <input type="checkbox" id="tagBox" name="tagBox" value="tag" />
            <button id={service.id} onClick={handleDelete}>Delete Service</button>
        </section>
    )
}