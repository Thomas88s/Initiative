import React from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

const handleExit = (event) => {
    // Save data to sessionStorage
sessionStorage.setItem('key', 'value');

// Get saved data from sessionStorage
let data = sessionStorage.getItem('key');

// Remove saved data from sessionStorage
sessionStorage.removeItem('key');

// Remove all saved data from sessionStorage
sessionStorage.clear(data);
}

export const AdminNavBar = (props) => {
  return (
    <nav className="navbar bg-dark text-white flex-md-nowrap p-0 shadow">
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <Link className="nav-link" to="/admin7HmKXhQsrnTpYflD">Admin Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/admin/usersTdu8ngstqVzhP4D9">View Profile</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/admin/messages1sZY5bgG04Pw7aws">Messages</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/admin/services0sH0AOSszsP5GEUh">Services</Link>
        </li>  
        <li className="nav-item">
          <Link className="nav-link" to="/admin/eventsrs77fUxqPmQtJEdz">Events</Link>
        </li>  
        <li className="nav-item">
          <Link className="nav-link" to="/admin/newsLettersBctGSb59aC7uZPQW">newsLetter</Link>
        </li>  
        <li className="nav-item">
          <Link className="nav-link" to="">Users Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/messages">User Messages</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/services">User Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login" onClick={event => {
                    handleExit()
                }}>Sign Out</Link>
        </li>
      </ul>
    </nav>
  )
}