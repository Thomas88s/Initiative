import React, { useContext }from "react"
  import { VolunteerContext } from "./VolunteerProvider"
  import { useHistory } from "react-router-dom"
  import "./Volunteer.css"

  
  export const VolunteerCard = ({ volunteer }) => {
      const { deleteVolunteer } = useContext(VolunteerContext)
      const history = useHistory()
      
  const handleRelease = () => {
      deleteVolunteer(volunteer.id)
    }
    
  return   (
      <section className="volunteer" id="volunteerId">
          <h3 className="Name">{volunteer.name}</h3>
          <div className="Date"><h5>Date Applied:</h5>  {volunteer.date}</div>
          <div className="Address"><h5>Address:</h5>  {volunteer.address}</div>
          <div className="CityState"><h5>City/State:</h5>  {volunteer.cityState}</div>
          <div className="Zip"><h5>Zip:</h5>  {volunteer.zip}</div>
          <div className="HomePhone"><h5>Home Phone:</h5>  {volunteer.homePhone}</div>
          <div className="MobilePhone"><h5>Mobile Phone:</h5>  {volunteer.mobilePhone}</div>
          <div className="email"><h5>Email:</h5>  {volunteer.email}</div>
          <div className="emergencyContactName"><h5>Emergency Contact Name:</h5>  {volunteer.emergencyContactName}</div>
          <div className="emergencyContactNumber"><h5>Emergency Contact Number:</h5>  {volunteer.emergencyContactNumber}</div>
          <div className="currentEmployment"><h5>Current Employment:</h5>  {volunteer.currentEmployment}</div>
          <div className="educationLevel"><h5>Education Level:</h5>  {volunteer.educationLevel}</div>
          <div className="otherVolunteerActivities"><h5>Other Volunteer Activities:</h5>  {volunteer.otherVolunteerActivities}</div>
          <div className="previousWelfareServices"><h5>Previous Welfare Services:</h5>  {volunteer.previousWelfareServices}</div>
          <div className="reasonForVolunteering"><h5>Reason For Volunteering:</h5>  {volunteer.reasonForVolunteering}</div>
          <div className="specialSkills"><h5>Special Skills:</h5>  {volunteer.specialSkills}</div>
          <div className="convictions"><h5>Convictions:</h5> {volunteer.convictions}</div>
          <div className="howDidYouHear"><h5>How Did You Hear About Us:</h5>  {volunteer.howDidYouHear}</div>
          <div className="referenceName1"><h5>Reference Name:</h5>  {volunteer.referenceName1}</div>
          <div className="referenceEmail1"><h5>Reference Email:</h5>  {volunteer.referenceEmail1}</div>
          <div className="referencePhone2"><h5>Reference Phone:</h5>  {volunteer.referencePhone2}</div>
          <div className="referenceName2"><h5>Reference Name:</h5>  {volunteer.referenceName2}</div>
          <div className="referenceEmail2"><h5>Reference Email:</h5>  {volunteer.referenceEmail2}</div>
          <div className="referencePhone2"><h5>referencePhone2:</h5>  {volunteer.referencePhone2}</div>
          <div className="isAccepted"><h5>Accepted Status:</h5>  {volunteer.isAccepted === true ? "accepted" : "not accepted"}</div>
          
          <button className="volunteerButton" onClick={() => {
               history.push(`/volunteers/edit/${volunteer.id}`)
           }}>Edit</button>
        <div id="volunteerButtons">
        <button className="volunteerButton" onClick={() => {
               history.push(`/volunteers/accept/${volunteer.id}`)
           }}>Accept</button>
          <button  className="volunteerButton"onClick={handleRelease}>Reject</button>
        </div>
      </section>
   )
  }