import React from "react";
import { useHistory } from "react-router-dom"
import "./Home.css"    
    
    export const Home = () => {

        const history = useHistory()
     return(
        <>
            <h2>Welcome to Initiative</h2>

            <h4>in·i·ti·a·tive</h4>
            <h4>  /iˈniSH(ē)ədiv/</h4>
             <h6>noun</h6>
           
            <ul>1.the ability to assess and initiate things independently.
            "use your initiative, imagination, and common sense"</ul>
            <ul>2.the power or opportunity to act or take charge before others do.
            "We have gained the initiative and not allowed problems to dictate our life"</ul>
            <br></br>
            <div className="initiative">
            <h3>Our Initiative</h3>

            <h5>To improve the quality of life of low-income and disadvantaged individuals by advocating for their needs and rights; providing services; educating the community; building a community of support; participating in coalitions with other advocates and searching for new resources and partnerships.</h5>
            </div>

            <div className="vision">
            <h3>Our Vision</h3>
            <h5>Organizing Resources For Social Change And Economic Independence</h5>
            </div>

            <h5>Become a volunteer!</h5>
            <button className="eventButton" onClick={() => {
               history.push(`/volunteers/create`)
           }}>Sign Up</button>

            <h5>Help out someone who really needs it</h5>
            <button className="eventButton" onClick={() => {
               history.push(`/donations/create`)
           }}>Donate</button>


        <div className="externalLinks">
        <h4>External Links</h4>

        <div className="linkList">
        <ul>
        <li><a href="https://tn211.myresourcedirectory.com/"> United Way Resource Directory</a></li>

        <li><a href="https://www.monroeharding.org/">Monroe Harding</a> </li>

         <li><a href="https://www.nashville.gov/Metro-Action-Commission/HOPE-Program.aspx">Metro Action</a></li>

         <li><a href=" https://hub.nashville.gov/s/request-type/a0ut0000001GZ7DAAW/metro-action-commission-hope-application?language=en_US">HOPE Program Application Portal</a></li>  

        <li> <a href="https://oasiscenter.org/for-youth/rapid-rehousing"> Oasis Center Rapid Rehousing Program</a></li>

        <li><a href="https://marthaobryan.org/ "> Martha O’Bryan Center</a></li>

        <li><a href="https://cctenn.org/">Catholic Charities</a></li>

        <li> <a href="https://centerstone.org/"> Centerstone</a></li>
        <li><a href="https://www.sacenter.org/"> Sexual Assault Center of Middle TN</a></li>
        </ul>
        </div>
        </div>

        <h4>Need Immediate Help?</h4>
           <a href="contact" ><h5>Contact Us</h5></a>
        </>
    )}