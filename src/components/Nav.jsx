import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div><nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">TUF</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link " aria-current="page" to="/">Banner</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/internal">Internal</Link>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
  </div>
  )
}

export default Nav