import React from 'react';
import {
  Link
} from "react-router-dom";

import CountryCard from "./CountryCard";


class CountriesComponent extends React.Component {
    constructor(props) {
        super(props);
        this.countries = props.countries;
        console.log('CountriesComponent ', this.countries.length);
    }
    
    render() {
        //console.log(this.props.filter.length);
        let list = this.props.filter ?this.props.filter :this.props.countries;
        let cardLayout = "countries_container" + " " + (list.length>3 ?'justify-center' :'justify-left');
        return (
            <div className={cardLayout}>
                {list.map(country => (
                <CountryCard data={country} key={country.numericCode}/>  
                ))}
            </div>
        );
    }
}

export default CountriesComponent;