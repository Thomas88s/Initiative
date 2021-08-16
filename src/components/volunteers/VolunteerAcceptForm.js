import React, { useContext, useState, useEffect } from "react";
import { VolunteerContext } from "./VolunteerProvider";
import { useHistory, useParams } from "react-router-dom";
import { MessageContext } from "../messages/MessageProvider";
import { UsersContext } from "../users/UserProvider"
import "./Volunteer.css";




export const VolunteerAcceptForm = () => {
    const {  editVolunteer, getVolunteerById, getVolunteers} = useContext(VolunteerContext)
    const { getUsers } = useContext(UsersContext)
    const currentUserId = parseInt(sessionStorage.getItem("App_user"))
    const { addMessage } = useContext(MessageContext)

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;

    const [isLoading, setIsLoading] = useState(true);
    const { volunteerId } = useParams()
    const history = useHistory()
    
    
    const [volunteer, setVolunteer] = useState({
        name: "",
        address: "",
        cityState: "",
        zip: "",
        homePhone: "",
        mobilePhone: "",
        userId: 7,
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
        isAccepted: true
    })
    
    useEffect(() => {
        getVolunteers()
        .then(getUsers())
      
        
    }, [])
    
    const [message, setMessage] = useState({
        textArea: "Congratulations, you have been accepted as a volunteer!",
        receiverId: volunteer.userId,
        senderId: currentUserId,
        date: today
    })
    

    const handleAcceptVolunteer = (controlEvent) => {

            setIsLoading(true);
            if (volunteerId) {
                const newMessage = { ...message }
                 newMessage.date = today
                 newMessage.receiverId = volunteer.userId
                 setMessage(newMessage)
                 editVolunteer({
                    id: volunteer.id,
                    name: volunteer.name,
                    address: volunteer.address,
                    cityState: volunteer.cityState,
                    zip: volunteer.zip,
                    homePhone: volunteer.homePhone,
                    mobilePhone: volunteer.mobilePhone,
                    userId: volunteer.userId,
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
                    isAccepted: true
                })

                   
                    .then(addMessage(message))   
                    .then(() => history.push("/messages"))           
                    .then(() => history.push("/admin/volunteers"))
       
        }
    }

    useEffect(() => {
        getVolunteers()
        .then(() => {
          if (volunteerId) {
            getVolunteerById(volunteerId)
            .then(volunteer => {
                setVolunteer(volunteer)
                setIsLoading(false)
            })
          } else {
            setIsLoading(false)
          }
        })
      }, [])
   


    return (
        <form className="serviceForm">
            <h1>Volunteer Acceptance</h1>
            <h4>Do you want to accept {volunteer.name} as a volunteer?</h4>
           
            <button className="volunteerButton"
            disabled={isLoading}
                onClick={event => {
                    handleAcceptVolunteer()
                }}>
                Accept
            </button>
            <button className="volunteerButton"
           
                onClick={() => {
                    history.push(`/admin/volunteers`)
                }}>
                Exit
            </button>

        </form>
        )}