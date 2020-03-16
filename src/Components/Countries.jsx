import React from 'react';
import CountryCard from "./CountryCard";

class CountriesComponent extends React.Component {    
    render() {
        let list = this.props.filter ?this.props.filter :this.props.countries;
        let cardLayout = "countries_container justify-left";
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