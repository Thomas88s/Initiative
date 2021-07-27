import React, { useContext, useEffect, useState } from "react";
import { ServiceContext } from "./ServiceProvider";
import { TagContext } from "../tags/TagProvider"
import { useHistory, useParams } from "react-router-dom";
import "./Service.css";

export const ServiceForm = () => {
    const { addService, editService } = useContext(ServiceContext)
    // const { addTag, getTag } = useContext(TagContext)
    const currentUserId = parseInt(sessionStorage.getItem("App_user"))

    // let i = 0;

    // let taggedService = `${services.map(service => {
    //     let foundServices = getUserTags().filter((userTag) => {
    //         if (service.id === userTag.serviceId) {
    //             return userFavorite;
    //         }
    //     });

    // let TagIcon;    

    // if (typeof foundUserFavorite[i] !== 'undefined') {
    //     if (foundServices[i].serviceId === service.id) {
    //         taggedIcon = <img className="service_tagged" src="https://img.icons8.com/cute-clipart/64/000000/patrick-star.png" id="tagged--{service.id}" />
    //     }
    // // if the array is not empty when clicked, then render the blank star icon
    // } else {
    //     taggedIcon = <img className="service_tagged" src="https://img.icons8.com/material-outlined/48/000000/christmas-star.png" id="tagged--${service.id}" />
    // };

    const [service, setService] = useState({
        name: "",
        textArea: "",
        userId: currentUserId
    })

    const { serviceId } = useParams()
    const history = useHistory()

    const handleControlledInputChange = (event) => {
        const newService = { ...service }
        newService[event.target.id] = event.target.value
        setService(newService)
    }

    const handleSaveService = () => {
        if (service.textArea === "") {
            window.alert("Cannot post blank service")
        } else {
            if (serviceId) {
                editService({
                    id: service.id,
                    name: service.name,
                    textArea: service.textArea,
                    userId: currentUserId
                   
                })
                    .then(() => history.push("/services"))
            } else {
                addService(service)
                    .then(() => history.push("/services"))
            }
        }
    }

    return (
        <form className="serviceForm">
            <fieldset>
                <div className="form-group">
                <label htmlFor="serviceName">Service Name:</label>
                    <textarea type="text" id="name" required autoFocus className="form-control" onChange={handleControlledInputChange} value={service.name} />
                </div>
                <div className="form-group">
                <label htmlFor="serviceDescription">Service Description:</label>
                    <textarea type="text" id="textArea" required autoFocus className="form-control" onChange={handleControlledInputChange} value={service.textArea} />
                </div>
            </fieldset>
            
            {/* { taggedIcon } */}
            <button className="btn btn-primary"
                onClick={event => {
                    handleSaveService()
                }}>
                Post
            </button>
        </form>
    )
}