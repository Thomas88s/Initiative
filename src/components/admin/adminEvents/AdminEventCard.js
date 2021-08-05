
  import React, { useContext }from "react"
  import { EventContext } from "../../events/EventProvider"
  import { useHistory } from "react-router-dom"
  import "../../events/Event.css"


  export const AdminEventCard = ({ event }) => {
  const { deleteEvent } = useContext(EventContext)
  
  
  const history = useHistory()

  const handleRelease = () => {
      deleteEvent(event.id)
    }
    
    
  return   (
      <section className="event" id="eventId">
          <h3 className="eventName">{event.name}</h3>
          <div className="eventDate">Date:  {event.date}</div>
          <div className="eventTime">Time:  {event.time}</div>
          <div className="eventLocation">Location:  {event.location}</div>
          <div className="eventDescription">Details:  {event.description}</div>

          <button className="eventButton" onClick={() => {
               history.push(`/events/edit/${event.id}`)
           }}>Edit</button>
          <button onClick={handleRelease}>Delete Event</button>
      </section>
   )
  }