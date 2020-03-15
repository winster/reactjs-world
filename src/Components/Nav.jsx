import React from 'react';
import {
    Link
  } from "react-router-dom";

function Nav(props) {
  return (
    <div className="nav-container">
      <div className="nav">
        <div className="nav-left">
          <img className="logo" src={props.theme === 'light' ?'/logo_light.png' :'/logo_dark.png'}></img>
          <Link to="/" className="title">Where in the world?</Link>
        </div>
        <div className="nav-right" onClick={props.onToggleTheme}>
          <span className="theme-icon">&#9790;</span> &nbsp; 
          <span id="themeText">{props.theme === 'light' ?'Dark Mode' :'Light Mode'}</span>
        </div>
      </div>
    </div>
  );
}

export default Nav;