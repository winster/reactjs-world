import React from 'react';
import {
    Link, Redirect
  } from "react-router-dom";

class CountryCardComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.data;
        this.state.population = this.state.population.toLocaleString('en');
    }
    handleOnClick = () => {
        this.setState({requestDetails: true});
    }
    render() {
        if(this.state.requestDetails) {
            return <Redirect push to={{pathname:"/details", state: this.state}}/>
        }
        let country = this.props.data;
        return (
        <div className="countrycard" onClick={this.handleOnClick}>
            <img src={country.flag}/>
            <div className="countrytext">
                <div className="countryname">
                    {country.name}
                </div>
                <div className="region countryelement">
                    <label>Population:</label> <span>{country.population}</span>
                </div>
                <div className="population countryelement">
                    <label>Region:</label> <span>{country.region}</span>
                </div>
                <div className="capital countryelement">
                    <label>Capital:</label> <span>{country.capital}</span>
                </div>
            </div>
        </div>
        );
    }
}

export default CountryCardComponent;