import React, { useContext, useEffect } from "react"
import { ServiceContext } from "../../services/ServiceProvider"
import { AdminUserServiceCard } from "../adminUsers/AdminUserServiceCard"
import "../../services/Service.css"

export const AdminUserServiceList = () => {
    const { services, getServices } = useContext(ServiceContext)

    useEffect(() => {
        getServices()

    }, [])


    return (
        <>
        <div className="serviceList">
            <h2>Service Board</h2>
            <div className="services">
                {services.map(service => {
                    return <AdminUserServiceCard key={service.id} service={service} />
                })}
            </div>
            <div>
               
            </div>
        </div>
        </>
    )
}    