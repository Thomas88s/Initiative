import React, { useContext, useEffect } from "react"
import { ServiceContext } from "../services/ServiceProvider"
import { UserProfileServiceCard } from "./UserProfileServiceCard"
import { UsersContext } from "./UserProvider"
import { TagContext } from "../tags/TagProvider"
import "../services/Service.css"




export const UserProfileServiceList = () => {
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
            <h2>User Services</h2>
            <div className="messages">
                {foundTags.map(service => {
                    return <UserProfileServiceCard key={service.service.id} service={service.service} />
                })}
            </div>
        </>
    )
}    