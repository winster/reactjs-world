import React from 'react';
import Countries from './Countries';
import Search from './SearchField';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import "isomorphic-fetch"; //ie11 support
import "@babel/polyfill"; //ie11 support

class HomeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            countries: [],
            filter: null
        };
    }
    componentDidMount() {
        if(localStorage.getItem('countries')) {
            this.setState({
                isLoaded: true,
                countries: JSON.parse(localStorage.getItem('countries'))
            });
        } else {
            fetch("https://restcountries.eu/rest/v2/all")
            .then(res => res.json())
            .then(
                (result) => {
                    localStorage.setItem('countries',JSON.stringify(result));
                    this.setState({
                        isLoaded: true,
                        countries: result
                    });
                },
                (error) => {
                    localStorage.setItem('error','API server unavailable');
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            )
        }
    }
    filterCountries = (text) => {
        let filteredCountries = this.state.countries.filter((country) => {
            let name = country.name.toLowerCase();
            return name.indexOf(text.toLowerCase()) !== -1
        });
        this.setState({filter: filteredCountries});
    }
    onSelectRegion = (option) => {
        let menu = option.label;
        let filteredCountries = this.state.countries.filter((country) => {
            let region = country.region.toLowerCase();
            return region === menu.toLowerCase()
        });
        this.setState({filter: filteredCountries});
    }
    render() {
        const {error, isLoaded, countries} = this.state;
        const options = [
            'Africa','Americas','Asia', 'Europe', 'Oceania'
        ];
        if (error) {
            return <div>Error: {error.message}</div>
        } else if(!isLoaded) {
            return <div className="loading_container">Loading...</div>
        } else {
            return (
            <div className="container">
                <div className="filter_container">
                    <Search onChange={this.filterCountries}/>
                    <Dropdown className="regionmenu" controlClassName='myControlClassName' menuClassName="myMenuClassName" options={options} onChange={this.onSelectRegion} placeholder="Filter by Region" />
                </div>
                <Countries countries={countries} filter={this.state.filter}/>
            </div>
            );
        }
    }
}

export default HomeComponent;