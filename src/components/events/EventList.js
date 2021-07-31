import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { EventContext } from "./EventProvider"
import { EventCard } from "./EventCard"
import "./Event.css"

export const EventList = () => {

const { events, getEvents } = useContext(EventContext)    

const history = useHistory()

useEffect(() => {
    console.log("EventList: useEffect - getEvents")
    getEvents()
  }, [])

  return (
     <>
    <div className="events">
      <h3>Events</h3>
       	      <button class= "eventButton" onClick={() => {history.push("/events/create")}}>
            Add Event
          </button>
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