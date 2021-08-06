import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import "./DonationForm.css";

export const DonationForm = () => {
    
    const currentUserId = parseInt(sessionStorage.getItem("App_user"))

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    const { addDonation, editDonation, getDonationById, getDonations } = 
    today = mm + '/' + dd + '/' + yyyy;

    const [donation, setDonation] = useState({
    
        name: "",
        address: "",
        cityState: "",
        zip: "",
        homePhone: "",
        mobilePhone: "",
        userId: currentUserId,
        date: today,
        email: "",
        donationAmount: ""
        
        })
    
    const [isLoading, setIsLoading] = useState(true);
    const { donationId } = useParams()
    const history = useHistory()

    // useEffect(() => {
    //     getDonations()
        
    // }, [])


    const handleControlledInputChange = (controlEvent) => {
        const newDonation = { ...donation }
        let selectedVal = controlEvent.target.value

        newDonation[controlEvent.target.id] = selectedVal
        setDonation(newDonation)
    }
    
    const handleSaveDonation = (controlEvent) => {
        
        if (donation.textArea === "") {
            window.alert("Cannot post blank donation")
        } else {
            setIsLoading(true);
            if (donationId) {
                editDonation({
                    id: donation.id,
                    name: donation.name,
                    address: donation.address,
                    cityState: donation.cityState,
                    zip: donation.zip,
                    homePhone: donation.homePhone,
                    mobilePhone: donation.mobilePhone,
                    userId: donation.userId,
                    date: today,
                    email: donation.email,
                    donationAmount: donation.donationAmount 
                })
                    .then(() => history.push("/donations"))
            } else {
                addDonation({
                    name: donation.name,
                    address: donation.address,
                    cityState: donation.cityState,
                    zip: donation.zip,
                    homePhone: donation.homePhone,
                    mobilePhone: donation.mobilePhone,
                    userId: currentUserId,
                    date: today,
                    email: donation.email,
                    donationAmount: donation.donationAmount})
                    .then(() => history.push("/"))
            }
        
     }
   }

    // useEffect(() => {
    //     getDonations()
    //     .then(() => {
    //       if (donationId) {
    //         getDonationById(donationId)
    //         .then(donation => {
    //             setDonation(donation)
    //             setIsLoading(false)
    //         })
    //       } else {
    //         setIsLoading(false)
    //       }
    //     })
    //   }, [])
   


    return (

        <form className="serviceForm">
            <h1>Volunteer Form</h1>
            <fieldset>
                <h4>Personal Information</h4>
                <div className="form-group">
                <label htmlFor="volunteerName">Name:</label>
                    <textarea type="text" id="name"   className="form-control" onChange={handleControlledInputChange} value={donation.name} />
                </div>
                <div className="form-group">
                <label htmlFor="volunteerAddress">Address:</label>
                    <textarea type="text" id="address"   className="form-control" onChange={handleControlledInputChange} value={donation.address} />
                </div>
                <div className="form-group">
                <label htmlFor="cityState">City/State:</label>
                    <textarea type="text" id="cityState"   className="form-control" onChange={handleControlledInputChange} value={donation.cityState} />
                </div>
                <div className="form-group">
                <label htmlFor="zip">Zip:</label>
                    <textarea type="text" id="zip"   className="form-control" onChange={handleControlledInputChange} value={donation.zip} />
                </div>
          
                <div className="form-group">
                <label htmlFor="homePhone">Home Phone:</label>
                    <textarea type="text" id="homePhone"   className="form-control" onChange={handleControlledInputChange} value={donation.homePhone} />
                </div>
          
                <div className="form-group">
                <label htmlFor="mobilePhone">Mobile Phone:</label>
                    <textarea type="text" id="mobilePhone"   className="form-control" onChange={handleControlledInputChange} value={donation.mobilePhone} />
                </div>
               
                <div className="form-group">
                <label htmlFor="email">Email:</label>
                    <textarea type="text" id="email"   className="form-control" onChange={handleControlledInputChange} value={donation.email} />
                </div>
                <div className="form-group">
                <label htmlFor="donationAmount">Amount:</label>
                    <textarea type="text" id="donationAmount"   className="form-control" onChange={handleControlledInputChange} value={donation.donationAmount} />
                </div>
          
              
                
            </fieldset>
            
          
            <button className="btn btn-primary"
           
                onClick={event => {
                    handleSaveDonation()
                }}>
                Submit
            </button>
            
        
        </form>
    )
  

}