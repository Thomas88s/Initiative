import React from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"


export const NavBar = (props) => {
  return (
    <nav className="navbar bg-dark text-white flex-md-nowrap p-0 shadow">
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <Link className="nav-link" to="">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/users">User Profile</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/messages">Messages</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/services">Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Sign Out</Link>
        </li>
      </ul>
    </nav>
  )
}