import React, { useContext, useEffect } from "react"
import { EventContext } from "../../events/EventProvider"
import { AdminEventCard } from "./AdminEventCard"
import "./AdminEvents.css"

export const AdminEventList = () => {

const { events, getEvents } = useContext(EventContext)    

useEffect(() => {
    getEvents()
  }, [])

  return (
     <>
    <div className="AdminEventsList">
      <h3>Events</h3>
      {
        events.map(event => {
          
          return <AdminEventCard key={event.id}
                      event={event} />
        })
      }
    </div>
   </> 
  )
}