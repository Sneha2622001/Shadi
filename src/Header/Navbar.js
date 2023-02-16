import React from 'react'
import  '../home.css'
//material ui icon
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';


export default function Navbar() {
  return (
    <div className='Navbar '>
      <nav className="navbar navbar-expand-lg bg-body-tertiary py-3 fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><h3>Rishte.Com</h3></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><b>Home</b></a>
        </li>

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><b>DCM</b></a>
        </li>

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><b>Community Meets</b></a>
        </li>

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><b>Exclusive</b></a>
        </li>

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><b>Schemes</b></a>
        </li>

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><b>Contact Us</b></a>
        </li>
        
      </ul>

      <button className='btn  login mx-3'><PersonOutlineIcon />
      <b>Login</b></button>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
    </div>
  )
}



