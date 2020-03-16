import React from 'react';
import {
    withRouter
  } from "react-router-dom";

class CountryCardComponent extends React.Component {
    handleOnClick = (countryCode) => {
        this.props.history.push("/"+countryCode);
    }
    render() {
        let country = this.props.data;
        country.population = country.population.toLocaleString('en');
        return (
        <div className="countrycard" onClick={this.handleOnClick.bind(this,country.alpha3Code)}>
            <div className="cardimage">
                <img src={country.flag} alt={country.name}/>
            </div>
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

export default withRouter(CountryCardComponent);