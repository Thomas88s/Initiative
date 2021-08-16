import React, { useContext, useState, useEffect } from "react";
import { ServiceContext } from "./ServiceProvider";
import { useHistory, useParams } from "react-router-dom";
import "./Service.css";

export const ServiceForm = () => {
    const { addService, editService, getServiceById, getServices } = useContext(ServiceContext)
   

    const currentUserId = parseInt(sessionStorage.getItem("App_user"))

    

    const [service, setService] = useState({
        name: "",
        textArea: "",
        userId: currentUserId
    })
    
    const [isLoading, setIsLoading] = useState(true);
    const { serviceId } = useParams()
    const history = useHistory()

    useEffect(() => {
        getServices()
        
    }, [])


    const handleControlledInputChange = (controlEvent) => {
        const newService = { ...service }
        let selectedVal = controlEvent.target.value

        newService[controlEvent.target.id] = selectedVal
        setService(newService)
    }

    const handleSaveService = (controlEvent) => {
        
        if (service.textArea === "") {
            window.alert("Cannot post blank service")
        } else {
            setIsLoading(true);
            if (serviceId) {
                editService({
                    id: service.id,
                    name: service.name,
                    textArea: service.textArea,
                    userId: currentUserId
                   
                })
                    .then(() => history.push("/admin/services0sH0AOSszsP5GEUh"))
            } else {
                addService({
                    name: service.name,
                    textArea: service.textArea,
                    userId: currentUserId})
                    .then(() => history.push("/services"))
            }
        }
    }

    useEffect(() => {
        getServices()
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
            
          
            <button className="serviceButton"
            disabled={isLoading}
                onClick={event => {
                    handleSaveService()
                }}>
                Confirm
            </button>
            
        
        </form>
    )
}