import React, { useContext, useState } from "react";
import { ServiceContext } from "../services/ServiceProvider";
import { useHistory, useParams } from "react-router-dom";
import "../services/Service.css";

export const AdminServiceForm = () => {
    const { addService, editService } = useContext(ServiceContext)
    // const { addTag, getTag } = useContext(TagContext)
    const currentUserId = parseInt(sessionStorage.getItem("App_user"))

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
            
           
            <button className="btn btn-primary"
                onClick={event => {
                    handleSaveService()
                }}>
                Post
            </button>
        </form>
    )
}