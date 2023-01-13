import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  let myStyle={
    color:"white",
    color:props.mode==="dark"?"white":"#624F82",
    
   }
  return (
    <nav className= {`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <h4 className="mx-2 my=1" style={myStyle} >{props.title}</h4>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <h6 className="mx-2 my-1" style={myStyle}  >Home</h6>
            
           
          </li>
          <li className="nav-item">
            <h6 className="mx-2 my-1" style={myStyle} >{props.aboutText}</h6>
          </li>
          <li>
          <h6 className="mx-2 my-1" style={myStyle} >More</h6>
          </li>
        </ul>
        {/* <ul className="dtypes">
          <li>
            <button className="blue"></button>
            
          </li>
          <li>
            <button className="red"></button>
          </li>
          <li>
            <button className="purple"></button>
          </li>
        </ul> */}
        
        <div className={`form-check form-switch text-${props.mode==="light"?"dark":"light"}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode==="light"?"dark":"light"} mode</label>
</div>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
      </div>
    </div>
  </nav>
  )
}
Navbar.propTypes={title:PropTypes.string,
aboutText:PropTypes.string
}