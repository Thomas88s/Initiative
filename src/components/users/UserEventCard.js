import React, { useContext } from "react"
import { EventTagContext } from "../tags/EventTagProvider"
import "../events/Event.css"

export const UserEventCard = ({ event }) => {
    const { deleteEventTag, eventTags} = useContext(EventTagContext)
    let foundEventTag = eventTags.find(eventTag => eventTag.eventId === event.id) 
    
    const handleDelete = () => {
        deleteEventTag(foundEventTag.id)
           
    }
   
    return (
        <section className="userEvenCard">
             <h3 className="eventName">{event.name}</h3>
          <div className="eventDate">Date:  {event.date}</div>
          <div className="eventLocation">Location:  {event.location}</div>
          <div className="eventDescription">Details:  {event.description}</div>
            <button id={event.id} className="eventsButton" onClick={handleDelete}>Delete Event</button>
        </section>
    )
}