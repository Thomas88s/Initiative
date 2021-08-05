import React, { useContext, useEffect } from "react"
import { VolunteerContext } from "./VolunteerProvider"
import { VolunteerCard } from "./VolunteerCard"
import "./Volunteer.css"

export const VolunteerList = () => {
    const { volunteers, getVolunteers } = useContext(VolunteerContext)

    useEffect(() => {
        getVolunteers()

    }, [])


    return (
        <>
        <div className="volunteerList">
            <h2>Volunteers</h2>
            <div className="volunteers">
                {volunteers.map(volunteer => {
                    return <VolunteerCard key={volunteer.id} volunteer={volunteer} />
                })}
            </div>
            <div>
               
            </div>
        </div>
        </>
    )
}    