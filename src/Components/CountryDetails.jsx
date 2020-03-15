import React from 'react';
import Back from './BackButton';

class CountryDetailsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.location.state;
    }
    render() {
        return (
            <div>
                <Back></Back>
                <div>
                    <img src={this.state.flag}/>
                    <div className="countryname">{this.state.name}</div>
                    <div className="region">{this.state.region}</div>
                    <div className="population">{this.state.population}</div>
                    <div className="capital">{this.state.capital}</div>
                </div>
        </div>
        );
    }
}

export default CountryDetailsComponent;