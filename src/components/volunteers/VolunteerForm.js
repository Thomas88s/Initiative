import React, { useContext, useState, useEffect } from "react";
import { VolunteerContext } from "./VolunteerProvider";
import { useHistory, useParams } from "react-router-dom";
import "./Volunteer.css";

export const ServiceForm = () => {
    const { addVolunteer, editVolunteer, getVolunteerById, getVolunteers } = useContext(VolunteerContext)
    const currentUserId = parseInt(sessionStorage.getItem("App_user"))

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    const [volunteer, setService] = useState({
        name: "",
        Address: "",
        userId: currentUserId,
        date: today,
        email: "",
        emergencyContactName: "",
        emergencyContactNumber: 0,
        currentEmployment: "",
        educationLevel: "",
        otherVolunteerActivities: "",
        previousWelfareServices: "",
        reasonForVolunteering: "",
        specialSkills:"",
        convictions: "",
        howDidYouHear: "",
        referenceName1: "",
        referenceEmail1: "",
        referencePhone1: 0,
        referenceName2: "",
        referenceEmail2: "",
        referencePhone2: 0
        })
    
    const [isLoading, setIsLoading] = useState(true);
    const { volunteerId } = useParams()
    const history = useHistory()

    useEffect(() => {
        getVolunteers()
        
    }, [])


    const handleControlledInputChange = (controlEvent) => {
        const newVolunteer = { ...volunteer }
        let selectedVal = controlEvent.target.value

        newVolunteer[controlEvent.target.id] = selectedVal
        setService(newVolunteer)
    }

    const handleSaveVolunteer = (controlEvent) => {
        
        if (volunteer.textArea === "") {
            window.alert("Cannot post blank volunteer")
        } else {
            setIsLoading(true);
            if (volunteerId) {
                editVolunteer({
                    id: volunteer.id,
                    name: volunteer.name,
                    Address: volunteer.Address,
                    userId: currentUserId,
                    date: today,
                    email: volunteer.email,
                    emergencyContactName: volunteer.emergencyContactName,
                    emergencyContactNumber: volunteer.emergencyContactNumber,
                    currentEmployment: volunteer.currentEmployment,
                    educationLevel: volunteer.educationLevel,
                    otherVolunteerActivities: volunteer.otherVolunteerActivities,
                    previousWelfareServices: volunteer.previousWelfareServices,
                    reasonForVolunteering: volunteer.reasonForVolunteering,
                    specialSkills:volunteer.specialSkills,
                    convictions: volunteer.convictions,
                    howDidYouHear: volunteer.howDidYouHear,
                    referenceName1: volunteer.referenceName1,
                    referenceEmail1: volunteer.referenceEmail1,
                    referencePhone1: volunteer.referencePhone1,
                    referenceName2: volunteer.referenceName2,
                    referenceEmail2: volunteer.referenceEmail2,
                    referencePhone2: volunteer.referencePhone2
                })
                    .then(() => history.push("/admin/volunteers"))
            } else {
                addVolunteer({
                    name: volunteer.name,
                    address: volunteer.address,
                    userId: currentUserId,
                    date: today,
                    email: volunteer.email,
                    emergencyContactName: volunteer.emergencyContactName,
                    emergencyContactNumber: volunteer.emergencyContactNumber,
                    currentEmployment: volunteer.currentEmployment,
                    educationLevel: volunteer.educationLevel,
                    otherVolunteerActivities: volunteer.otherVolunteerActivities,
                    previousWelfareServices: volunteer.previousWelfareServices,
                    reasonForVolunteering: volunteer.reasonForVolunteering,
                    specialSkills:volunteer.specialSkills,
                    convictions: volunteer.convictions,
                    howDidYouHear: volunteer.howDidYouHear,
                    referenceName1: volunteer.referenceName1,
                    referenceEmail1: volunteer.referenceEmail1,
                    referencePhone1: volunteer.referencePhone1,
                    referenceName2: volunteer.referenceName2,
                    referenceEmail2: volunteer.referenceEmail2,
                    referencePhone2: volunteer.referencePhone2})
                    .then(() => history.push("/volunteers"))
            }
        }
    }

    useEffect(() => {
        getVolunteers()
        .then(() => {
          if (volunteerId) {
            getVolunteerById(volunteerId)
            .then(volunteer => {
                setService(volunteer)
                setIsLoading(false)
            })
          } else {
            setIsLoading(false)
          }
        })
      }, [])
   


    return (
        <form className="serviceForm">
            <fieldset>
                <div className="form-group">
                <label htmlFor="volunteerName">Name:</label>
                    <textarea type="text" id="name" required autoFocus className="form-control" onChange={handleControlledInputChange} value={volunteer.name} />
                </div>
                <div className="form-group">
                <label htmlFor="volunteerAddress">Address:</label>
                    <textarea type="text" id="address" required autoFocus className="form-control" onChange={handleControlledInputChange} value={volunteer.Address} />
                </div>
          
                <div className="form-group">
                <label htmlFor="volunteerEmail">Email:</label>
                    <textarea type="text" id="name" required autoFocus className="form-control" onChange={handleControlledInputChange} value={volunteer.email} />
                </div>
                <div className="form-group">
                <label htmlFor="emergencyContactName">Emergency Contact Name:</label>
                    <textarea type="text" id="emergencyContactName" required autoFocus className="form-control" onChange={handleControlledInputChange} value={volunteer.emergencyContactName} />
                </div>
         
                <div className="form-group">
                <label htmlFor="volunteerName">Emergency Contact Number:</label>
                    <textarea type="text" id="emergencyContactNumber" required autoFocus className="form-control" onChange={handleControlledInputChange} value={volunteer.emergencyContactNumber} />
                </div>
                <div className="form-group">
                <label htmlFor="currentEmployment">Current employment:</label>
                    <textarea type="text" id="currentEmployment" required autoFocus className="form-control" onChange={handleControlledInputChange} value={volunteer.currentEmployment} />
                </div>
          
                <div className="form-group">
                <label htmlFor="educationLevel">Education/Location:</label>
                    <textarea type="text" id="educationLevel" required autoFocus className="form-control" onChange={handleControlledInputChange} value={volunteer.educationLevel} />
                </div>
                <div className="form-group">
                <label htmlFor="otherVolunteerActivities">Other volunteer activities and organizations:</label>
                    <textarea type="text" id="otherVolunteerActivities" required autoFocus className="form-control" onChange={handleControlledInputChange} value={volunteer.otherVolunteerActivities} />
                </div>
           
                <div className="form-group">
                <label htmlFor="previousWelfareServices">Have you ever worked with other welfare agencies? If so, please list those:</label>
                    <textarea type="text" id="previousWelfareServices" required autoFocus className="form-control" onChange={handleControlledInputChange} value={volunteer.previousWelfareServices} />
                </div>
                <div className="form-group">
                <label htmlFor="reasonForVolunteering">Why do you want to volunteer?</label>
                    <textarea type="text" id="reasonForVolunteering" required autoFocus className="form-control" onChange={handleControlledInputChange} value={volunteer.reasonForVolunteering} />
                </div>
           
                <div className="form-group">
                <label htmlFor="specialSkills">Special Skill (Carpentry, Graphic Design, Computer Skills, etc.) :</label>
                    <textarea type="text" id="specialSkills" required autoFocus className="form-control" onChange={handleControlledInputChange} value={volunteer.specialSkills} />
                </div>
                <div className="form-group">
                <label htmlFor="convictions">Have you ever been convicted of a crime?</label>
                    <textarea type="text" id="convictions" required autoFocus className="form-control" onChange={handleControlledInputChange} value={volunteer.convictions} />
                </div>
                <div className="form-group">
                <label htmlFor="howDidYouHear">How did you hear about volunteering?</label>
                    <textarea type="text" id="howDidYouHear" required autoFocus className="form-control" onChange={handleControlledInputChange} value={volunteer.howDidYouHear} />
                </div>
                <div className="form-group">
                <label htmlFor="referenceName1">Reference Name:</label>
                    <textarea type="text" id="referenceName1" required autoFocus className="form-control" onChange={handleControlledInputChange} value={volunteer.referenceName1} />
                </div>
                <div className="form-group">
                <label htmlFor="referenceEmail1">Reference Email:</label>
                    <textarea type="text" id="referenceEmail1" required autoFocus className="form-control" onChange={handleControlledInputChange} value={volunteer.referenceEmail1} />
                </div>
                <div className="form-group">
                <label htmlFor="referencePhone1">Volunteer Phone:</label>
                    <textarea type="text" id="referencePhone1" required autoFocus className="form-control" onChange={handleControlledInputChange} value={volunteer.referencePhone1} />
                </div>
                <div className="form-group">
                <label htmlFor="referenceName2">Reference Name:</label>
                    <textarea type="text" id="referenceName2" required autoFocus className="form-control" onChange={handleControlledInputChange} value={volunteer.referenceName2} />
                </div>
                <div className="form-group">
                <label htmlFor="referenceEmail2">Reference Email:</label>
                    <textarea type="text" id="referenceEmail2" required autoFocus className="form-control" onChange={handleControlledInputChange} value={volunteer.referenceEmail2} />
                </div>
                <div className="form-group">
                <label htmlFor="referencePhone2">Volunteer Phone:</label>
                    <textarea type="text" id="referencePhone2" required autoFocus className="form-control" onChange={handleControlledInputChange} value={volunteer.referencePhone2} />
                </div>
            </fieldset>
            
          
            <button className="btn btn-primary"
            disabled={isLoading}
                onClick={event => {
                    handleSaveVolunteer()
                }}>
                Confirm
            </button>
            
        
        </form>
    )
}