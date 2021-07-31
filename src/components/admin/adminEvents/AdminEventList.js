import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { EventContext } from "../../events/EventProvider"
import { AdminEventCard } from "./AdminEventCard"
import "../../events/Event.css"

export const AdminEventList = () => {

const { events, getEvents } = useContext(EventContext)    

const history = useHistory()

useEffect(() => {
    getEvents()
  }, [])

  return (
     <>
    <div className="events">
      <h3>Events</h3>
       	      <button className= "eventButton" onClick={() => {history.push("/events/create")}}>
            Add Event
          </button>
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