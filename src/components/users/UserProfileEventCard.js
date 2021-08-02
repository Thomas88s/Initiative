import React from "react"
import "../events/Event.css"

export const UserProfileEventCard = ({ event }) => {
   
   
    return (
        <section className="event">
             <h4 className="eventName">{event.name}</h4>
          <div className="eventDate">Date:  {event.date}</div>
          <div className="eventLocation">Location:  {event.location}</div>
          <div className="eventDescription">Details:  {event.description}</div>
        </section>
    )
}