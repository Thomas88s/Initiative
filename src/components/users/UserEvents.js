import React, { useContext, useEffect } from "react"
import { EventContext } from "../events/EventProvider"
import { UserEventCard } from "./UserEventCard"
import { UsersContext } from "./UserProvider"
import { EventTagContext } from "../tags/EventTagProvider"
import "../events/Event.css"




export const UserEventList = () => {
    const { getEvents } = useContext(EventContext)
    const { getUsers } = useContext(UsersContext)
    const { getEventTags, eventTags } = useContext(EventTagContext)

    let user = parseInt(sessionStorage.getItem("App_user"))
    let foundEventTags = eventTags.filter(eventTag => (eventTag.userId === user)) 

    useEffect(() => {
        getUsers()
        .then(getEventTags())
        .then(getEvents())
        console.log()
    }, [])


    return (
        <>
        <div className="eventList">
            <h2>User Events</h2>
            <div className="userEvent">
                {foundEventTags.map(event => {
                    return <UserEventCard key={event.event.id} event={event.event} />
                })}
            </div>
        </div>
        </>
    )
}    