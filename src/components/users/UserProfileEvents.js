import React, { useContext, useEffect } from "react"
import { EventContext } from "../events/EventProvider"
import { UserProfileEventCard } from "./UserProfileEventCard"
import { UsersContext } from "./UserProvider"
import { EventTagContext } from "../tags/EventTagProvider"
import "./User.css"




export const UserProfileEventList = () => {
    const { getEvents } = useContext(EventContext)
    const { getUsers } = useContext(UsersContext)
    const { getEventTags, eventTags } = useContext(EventTagContext)

    let user = parseInt(sessionStorage.getItem("App_user"))
    let foundEventTags = eventTags.filter(eventTag => (eventTag.userId === user)) 

    useEffect(() => {
        getUsers()
        .then(getEventTags())
        .then(getEvents())
        
    }, [])


    return (
        <> 
        <div className="userEvents">
            <h2>Upcoming Events</h2>
            <div className="events">
                {foundEventTags.map(event => {
                    return <UserProfileEventCard key={event.event.id} event={event.event} />
                })}
            </div>
        </div>
        </>
    )
}    