import React from 'react';
import Back from './BackButton';
import Border from './BorderButton';
import {
    withRouter, Redirect
  } from "react-router-dom";
  import "@babel/polyfill";

class CountryDetailsComponent extends React.Component {
    constructor(props) {
        super(props);
        const country = this.getCountryFromStorage();//incase direct PATH is entered without visiting home page, but visited home in an old browser session 
        if(country) {
            this.state = country;
        }
    }
    getCountryFromStorage = () => {
        if(localStorage.getItem('countries')) {  
            let countries = JSON.parse(localStorage.getItem('countries'));
            let countryCode = this.props.location.pathname.substring(1);
            let country = countries.find(c => c.alpha3Code === countryCode);  
            if(country && country.borders) {
                let borders = countries.filter(c => country.borders.some(b => c.alpha3Code === b));
                country.borders = borders;
            }  
            return country;
        }
        return null;
    }
    handleOnClick = (countryCode) => {
        this.props.history.push("/"+countryCode);
    }
    shouldComponentUpdate() {
        return true;
    }
    componentDidUpdate(preProps) {
        if(preProps.location.pathname !== this.props.location.pathname) { //Handles border country navigation
            let newCountry = this.getCountryFromStorage();
            this.setState(newCountry);
            this.forceUpdate(); //Required as the same component is loaded again, but with a diff path
        }
    }
    componentDidMount() {
    }
    render() {
        if(!this.state) {
            return <Redirect to="/NotFound"/>
        }
        return (
            <div className="details_container">
                <Back></Back>
                <div className="detail_content">
                    <div className="details_img_container">
                        <img className="details_img" src={this.state.flag} alt={this.state.name}/>
                    </div>
                    <div className="details_text_section">
                        <span className="country_title">{this.state.name}</span>
                        <div className="country_description">
                            <div className="left_half">
                                <div className="country_row"><label>Native Name:</label>&nbsp;{this.state.nativeName}</div>
                                <div className="country_row"><label>Population:</label>&nbsp;{this.state.population}</div>
                                <div className="country_row"><label>Region:</label>&nbsp;{this.state.region}</div>
                                <div className="country_row"><label>Sub Region:</label>&nbsp;{this.state.subregion}</div>
                                <div className="country_row"><label>Capital:</label>&nbsp;{this.state.capital}</div>
                            </div>
                            <div className="right_half">
                                <div className="country_row"><label>Top Level Domain:</label>&nbsp;{this.state.topLevelDomain.join(",")}</div>
                                <div className="country_row"><label>Currencies:</label>&nbsp;{this.state.currencies.map(c => c.name).join(",")}</div>
                                <div className="country_row"><label>Languages:</label>&nbsp;{this.state.languages.map(c => c.name).join(",")}</div>
                            </div>
                        </div>
                        <div className="country_boundaries_section">
                            <div className="country_boundaries_label"><label>Border Countries:</label>&nbsp;</div>
                            <div className="country_boundaries">{this.state.borders.map(border => <Border data={border} onClick={this.handleOnClick}></Border>)}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(CountryDetailsComponent);