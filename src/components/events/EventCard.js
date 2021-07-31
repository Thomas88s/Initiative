import React, { useContext, useState }from "react"
import { EventTagContext } from "../tags/EventTagProvider"
  import "./Event.css"


  export const EventCard = ({ event }) => {
    const currentUserId = parseInt(sessionStorage.getItem("App_user"))
    const { addEventTag, deleteEventTag, eventTags } = useContext(EventTagContext)
    
    const [eventTag, setEventTag] = useState({
        userId: currentUserId,
        eventId: event.id
    })

  const handleAdd = (event) => {
    const newEventTag = { ...eventTag }
    newEventTag[event.target.id] = event.target.value
    newEventTag.serviceId = event.id
    let eventId = eventTag.eventId
    let userId = currentUserId
    const foundEventTag = eventTags.find(eventTag => eventId === eventTag.eventId && userId === eventTag.userId)
    if (foundEventTag) {
        deleteEventTag(foundEventTag.id)
    } else {
    setEventTag(newEventTag)
    addEventTag(eventTag)
    } 
  }
    
    
  return   (
      <section className="event" id="eventId">
          <h3 className="eventName">{event.name}</h3>
          <div className="eventDate">Date:  {event.date}</div>
          <div className="eventLocation">Location:  {event.location}</div>
          <div className="eventDescription">Details:  {event.description}</div>
          <button id={event.id} onClick={handleAdd}>Add Event</button>
      </section>
   )
  }