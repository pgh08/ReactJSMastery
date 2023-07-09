import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const changeColor = () => {
  let select = document.getElementById('color-select');
  let value = select.options[select.selectedIndex].value;

  if(value !== "White"){
    document.body.style.color = "white";
    document.body.style.backgroundColor = value;
  }
  else{
    document.body.style.color = "black";
    document.body.style.backgroundColor = value;
  }
  
}

const changeStyle = {
  width: "75%",
  backgroundColor: "white",
  border: "1px solid #dadada ",
  borderRadius: "6px"
};

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutText}</Link>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}
          <select id="color-select" style={changeStyle}>
            <option value="White" onClick={changeColor}>White</option>
            <option value="#7800ad" onClick={changeColor}>Purple</option>
            <option value="#250101" onClick={changeColor}>Brown</option>
            <option value="#080048" onClick={changeColor}>Blue</option>
            <option value="Black" onClick={changeColor}>Black</option>
          </select>

          <div className={`form-check form-switch text-${props.txtMode}`}>
            <input className="form-check-input mx-3" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.toggleTxt}</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.prototype = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string
};

// Setting default values for props if value is not passed in App.js.
Navbar.defaultProps = {
  title: 'Set title here',
  aboutText: 'About',
  modeTxt: 'Enable Dark Mode'
};