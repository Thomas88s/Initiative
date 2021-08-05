import React from "react";
import { useHistory } from "react-router-dom"
    
    
    export const Home = () => {

        const history = useHistory()
     return(
        <>
            <h2>Foster</h2>
            <small>Loving care when you're not there.</small>
    
            <address>
                <div>Visit Us at One of Our Nashville Locations</div>
                <div>500 Puppy Way</div>
            </address>
            <h3>Become a volunteer!</h3>
            <button className="eventButton" onClick={() => {
               history.push(`/volunteers/create`)
           }}>Sign Up</button>
        </>
    )}