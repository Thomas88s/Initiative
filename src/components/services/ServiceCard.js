import React, { useContext } from "react"
import { useHistory } from "react-router-dom"
import { ServiceContext } from "./ServiceProvider"
import "./Service.css"

export const ServiceCard = ({ service }) => {
    const { deleteService } = useContext(ServiceContext)
    const history = useHistory()
    const currentUserId = parseInt(sessionStorage.getItem("Foster_user"))

    const handleDelete = () => {
        deleteService(service.id)
            .then(() => {
                history.push("/services")
            })
    }


    return (
        <section className="service">
            <p>{service.name}</p>
            <p>{service.textArea}</p>
            {/* <button onClick={() => {
               history.push(`/services/edit/${service.id}`)
           }}>Edit</button> */}
            <button id={service.id} onClick={handleDelete}>Delete Service</button>
        </section>
    )
}