import React, { useContext, useEffect } from "react"
import { EventContext } from "./EventProvider"
import { EventCard } from "./EventCard"
import "./Event.css"

export const EventList = () => {

const { events, getEvents } = useContext(EventContext)    

useEffect(() => {
    getEvents()
  }, [])

  return (
     <>
    <div className="events">
      <h3>Events</h3>
      {
        events.map(event => {
          
          return <EventCard key={event.id}
                      event={event} />
        })
      }
    </div>
   </> 
  )
}