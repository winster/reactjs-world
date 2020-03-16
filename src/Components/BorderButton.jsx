import React from "react";

function Border(props) {
    return(
        <button key={props.data.alpha3Code} className="border_button" onClick={props.onClick.bind(this,props.data.alpha3Code)}>{props.data.name}</button>
    );
}

export default Border;