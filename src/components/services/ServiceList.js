import React, { useContext, useEffect } from "react"
import { ServiceContext } from "./ServiceProvider"
import { ServiceCard } from "./ServiceCard"
import { ServiceForm } from "./ServiceForm"
import "./Service.css"

export const ServiceList = () => {
    const { services, getServices } = useContext(ServiceContext)

    useEffect(() => {
        getServices()

    }, [])


    return (
        <>
            <h2>Service Board</h2>
            <div className="services">
                {services.map(service => {
                    return <ServiceCard key={service.id} service={service} />
                })}
            </div>
            <div>
                <ServiceForm />
            </div>
        </>
    )
}    