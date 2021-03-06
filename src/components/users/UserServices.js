import React, { useContext, useEffect } from "react"
import { ServiceContext } from "../services/ServiceProvider"
import { UserServiceCard } from "./UserServiceCard"
import { UsersContext } from "./UserProvider"
import { TagContext } from "../tags/TagProvider"
import "../services/Service.css"




export const UserServiceList = () => {
    const { getServices } = useContext(ServiceContext)
    const { getUsers } = useContext(UsersContext)
    const { getTags, tags } = useContext(TagContext)

    let user = parseInt(sessionStorage.getItem("App_user"))
    let foundTags = tags.filter(tag => (tag.userId === user)) 

    useEffect(() => {
        getUsers()
        .then(getTags())
        .then(getServices())
    }, [])


    return (
        <>
        <div className="userSubscribedServices">
            <h2>User Services</h2>
            <div className="services">
                {foundTags.map(service => {
                    return <UserServiceCard key={service.service.id} service={service.service} />
                })}
            </div>
        </div>
        </>
    )
}    