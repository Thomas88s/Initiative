import React, { useContext, useEffect } from "react"
import { ServiceContext } from "../services/ServiceProvider"
import { UserServiceCard } from "./UserServiceCard"
import { UsersContext } from "./UserProvider"
import { TagContext } from "../tags/TagProvider"
import "../services/Service.css"

export const UserServiceList = () => {
    const { services, getServices } = useContext(ServiceContext)
    const { getUsers, users } = useContext(UsersContext)
    const { getTags, tags } = useContext(TagContext)

    let foundUser = users.find(user => (user.id === parseInt(sessionStorage.getItem("App_user"))))
    let foundTags = tags.filter(tag => (tag.userId === foundUser.id))
    let foundService = services.find(service => (service.id === foundTags.serviceId))
    
    useEffect(() => {
        getUsers()
        .then(getTags())
        .then(getServices())
        
        .then(console.log(foundService))
        
    }, [])


    return (
        <>
            <h2>Service Board</h2>
            {  
   foundService?  <div className="users">
        <UserServiceCard key={foundService.id} service={foundService} />
    </div> : <div></div>
    }
        </>
    )
}    