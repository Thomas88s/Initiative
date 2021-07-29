import React, { useContext, useState, useEffect } from "react";
import { ServiceContext } from "../../services/ServiceProvider";
import { UsersContext } from "../../users/UserProvider";
import { useHistory, useParams } from "react-router-dom";
import "../../services/Service.css";

export const AdminServiceForm = () => {
    const { addService, editService, getServiceById, getServices } = useContext(ServiceContext)
    const { getUsers } = useContext(UsersContext)
    const currentUserId = parseInt(sessionStorage.getItem("App_user"))

    const [service, setService] = useState({
        name: "",
        textArea: "",
        userId: currentUserId
    })

    const [isLoading, setIsLoading] = useState(true);
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
            setIsLoading(true);
        }    if (serviceId) {
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
        useEffect(() => {
            getServices()
            .then(getUsers())
            .then(() => {
              if (serviceId) {
                getServiceById(serviceId)
                .then(service => {
                    setService(service)
                    setIsLoading(false)
                })
              } else {
                setIsLoading(false)
              }
            })
          }, [])
       

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
             disabled={isLoading}
                onClick={handleSaveService}>
                Post
            </button>
        </form>
    )
}