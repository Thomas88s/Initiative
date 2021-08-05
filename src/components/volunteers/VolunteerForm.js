import React, { useContext, useState, useEffect } from "react";
import { VolunteerContext } from "./VolunteerProvider";
import { useHistory, useParams } from "react-router-dom";
import "./Volunteer.css";

export const VolunteerForm = () => {
    const { addVolunteer, editVolunteer, getVolunteerById, getVolunteers } = useContext(VolunteerContext)
    const currentUserId = parseInt(sessionStorage.getItem("App_user"))

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    const [volunteer, setService] = useState({
        name: "",
        address: "",
        cityState: "",
        zip: "",
        homePhone: "",
        mobilePhone: "",
        userId: currentUserId,
        date: today,
        email: "",
        emergencyContactName: "",
        emergencyContactNumber: "",
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
        referencePhone1: "",
        referenceName2: "",
        referenceEmail2: "",
        referencePhone2: "",
        isAccepted: false
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
                    address: volunteer.address,
                    cityState: volunteer.cityState,
                    zip: volunteer.zip,
                    homePhone: volunteer.homePhone,
                    mobilePhone: volunteer.mobilePhone,
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
                    referencePhone2: volunteer.referencePhone2,
                    isAccepted: volunteer.isAccepted
                })
                    .then(() => history.push("/admin/volunteers"))
            } else {
                addVolunteer({
                    name: volunteer.name,
                    address: volunteer.address,
                    cityState: volunteer.cityState,
                    zip: volunteer.zip,
                    homePhone: volunteer.homePhone,
                    mobilePhone: volunteer.mobilePhone,
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
                    referencePhone2: volunteer.referencePhone2,
                    isAccepted: volunteer.isAccepted})
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
            <h1>Volunteer Form</h1>
            <fieldset>
                <h4>Personal Information</h4>
                <div className="form-group">
                <label htmlFor="volunteerName">Name:</label>
                    <textarea type="text" id="name"   className="form-control" onChange={handleControlledInputChange} value={volunteer.name} />
                </div>
                <div className="form-group">
                <label htmlFor="volunteerAddress">Address:</label>
                    <textarea type="text" id="address"   className="form-control" onChange={handleControlledInputChange} value={volunteer.address} />
                </div>
                <div className="form-group">
                <label htmlFor="city">City/State:</label>
                    <textarea type="text" id="city"   className="form-control" onChange={handleControlledInputChange} value={volunteer.cityState} />
                </div>
                <div className="form-group">
                <label htmlFor="zip">Zip:</label>
                    <textarea type="text" id="zip"   className="form-control" onChange={handleControlledInputChange} value={volunteer.zip} />
                </div>
          
                <div className="form-group">
                <label htmlFor="homePhone">Home Phone:</label>
                    <textarea type="text" id="homePhone"   className="form-control" onChange={handleControlledInputChange} value={volunteer.homePhone} />
                </div>
          
                <div className="form-group">
                <label htmlFor="mobilePhone">Mobile Phone:</label>
                    <textarea type="text" id="mobilePhone"   className="form-control" onChange={handleControlledInputChange} value={volunteer.mobilePhone} />
                </div>
          
                <div className="form-group">
                <label htmlFor="volunteerEmail">Email:</label>
                    <textarea type="text" id="name"   className="form-control" onChange={handleControlledInputChange} value={volunteer.email} />
                </div>
                <div className="form-group">
                    <h4>Emergency Information</h4>
                <label htmlFor="emergencyContactName">Emergency Contact Name:</label>
                    <textarea type="text" id="emergencyContactName"   className="form-control" onChange={handleControlledInputChange} value={volunteer.emergencyContactName} />
                </div>
         
                <div className="form-group">
                <label htmlFor="volunteerName">Emergency Contact Number:</label>
                    <textarea type="text" id="emergencyContactNumber"   className="form-control" onChange={handleControlledInputChange} value={volunteer.emergencyContactNumber} />
                </div>
                <div className="form-group">
                    <h4>Employment/Experience</h4>
                <label htmlFor="currentEmployment">Current employment:</label>
                    <textarea type="text" id="currentEmployment"   className="form-control" onChange={handleControlledInputChange} value={volunteer.currentEmployment} />
                </div>
          
                <div className="form-group">
                <label htmlFor="educationLevel">Education/Location:</label>
                    <textarea type="text" id="educationLevel"   className="form-control" onChange={handleControlledInputChange} value={volunteer.educationLevel} />
                </div>
                <div className="form-group">
                <label htmlFor="otherVolunteerActivities">Other volunteer activities and organizations:</label>
                    <textarea type="text" id="otherVolunteerActivities"   className="form-control" onChange={handleControlledInputChange} value={volunteer.otherVolunteerActivities} />
                </div>
           
                <div className="form-group">
                <label htmlFor="previousWelfareServices">Have you ever worked with other welfare agencies? If so, please list those:</label>
                    <textarea type="text" id="previousWelfareServices"   className="form-control" onChange={handleControlledInputChange} value={volunteer.previousWelfareServices} />
                </div>
                <div className="form-group">
                <label htmlFor="reasonForVolunteering">Why do you want to volunteer?</label>
                    <textarea type="text" id="reasonForVolunteering"   className="form-control" onChange={handleControlledInputChange} value={volunteer.reasonForVolunteering} />
                </div>
           
                <div className="form-group">
                <label htmlFor="specialSkills">Special Skill (Carpentry, Graphic Design, Computer Skills, etc.) :</label>
                    <textarea type="text" id="specialSkills"   className="form-control" onChange={handleControlledInputChange} value={volunteer.specialSkills} />
                </div>
                <div className="form-group">
                    <h4>Background</h4>
                <label htmlFor="convictions">Have you ever been convicted of a crime? If so, please explain:</label>
                    <textarea type="text" id="convictions"   className="form-control" onChange={handleControlledInputChange} value={volunteer.convictions} />
                </div>
                <div className="form-group">
                <label htmlFor="howDidYouHear">How did you hear about volunteering?</label>
                    <textarea type="text" id="howDidYouHear"   className="form-control" onChange={handleControlledInputChange} value={volunteer.howDidYouHear} />
                </div>
                <div className="form-group">
                    <h4>References</h4>
                <label htmlFor="referenceName1">Reference Name:</label>
                    <textarea type="text" id="referenceName1"   className="form-control" onChange={handleControlledInputChange} value={volunteer.referenceName1} />
                </div>
                <div className="form-group">
                <label htmlFor="referenceEmail1">Reference Email:</label>
                    <textarea type="text" id="referenceEmail1"   className="form-control" onChange={handleControlledInputChange} value={volunteer.referenceEmail1} />
                </div>
                <div className="form-group">
                <label htmlFor="referencePhone1">Reference Phone:</label>
                    <textarea type="text" id="referencePhone1"   className="form-control" onChange={handleControlledInputChange} value={volunteer.referencePhone1} />
                </div>
                <div className="form-group">
                <label htmlFor="referenceName2">Reference Name:</label>
                    <textarea type="text" id="referenceName2"   className="form-control" onChange={handleControlledInputChange} value={volunteer.referenceName2} />
                </div>
                <div className="form-group">
                <label htmlFor="referenceEmail2">Reference Email:</label>
                    <textarea type="text" id="referenceEmail2"   className="form-control" onChange={handleControlledInputChange} value={volunteer.referenceEmail2} />
                </div>
                <div className="form-group">
                <label htmlFor="referencePhone2">Reference Phone:</label>
                    <textarea type="text" id="referencePhone2"   className="form-control" onChange={handleControlledInputChange} value={volunteer.referencePhone2} />
                </div>
            </fieldset>
            
          
            <button className="btn btn-primary"
            disabled={isLoading}
                onClick={event => {
                    handleSaveVolunteer()
                }}>
                Submit
            </button>
            
        
        </form>
    )
}