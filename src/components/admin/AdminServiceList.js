import React, { useContext, useEffect } from "react"
import { ServiceContext } from "../services/ServiceProvider"
import { AdminServiceCard } from "./AdminServiceCard"
import "../services/Service.css"

export const AdminServiceList = () => {
    const { services, getServices } = useContext(ServiceContext)

    useEffect(() => {
        getServices()

    }, [])


    return (
        <>
            <h2>Service Board</h2>
            <div className="services">
                {services.map(service => {
                    return <AdminServiceCard key={service.id} service={service} />
                })}
            </div>
            <div>
               
            </div>
        </>
    )
}    