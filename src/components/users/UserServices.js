import React, { useContext, useEffect } from "react"
import { ServiceContext } from "../services/ServiceProvider"
import { UserServiceCard } from "./UserServiceCard"
import "../services/Service.css"

export const UserServiceList = () => {
    const { services, getServices } = useContext(ServiceContext)

    useEffect(() => {
        getServices()

    }, [])


    return (
        <>
            <h2>Service Board</h2>
            <div className="services">
                {services.map(service => {
                    return <UserServiceCard key={service.id} service={service} />
                })}
            </div>
            <div>
               
            </div>
        </>
    )
}    