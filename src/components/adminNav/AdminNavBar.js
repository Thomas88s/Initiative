import React from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"


export const AdminNavBar = (props) => {
  return (
    <nav className="navbar bg-dark text-white flex-md-nowrap p-0 shadow">
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <Link className="nav-link" to="/admin">Admin Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/admin/users">Users Profile</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/admin/messages">Messages</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/admin/services">Services</Link>
        </li>  
        <li className="nav-item">
          <Link className="nav-link" to="">Users Home</Link>
        </li>
      </ul>
    </nav>
  )
}