import React from 'react';
import Countries from './Countries';
import Search from './SearchField';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

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
        fetch("https://restcountries.eu/rest/v2/all")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    countries: result
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
            }
        )
    }
    filterCountries = (text) => {
        console.log('inside filterCountris ', text);
        let filteredCountries = this.state.countries.filter((country) => {
            let name = country.name.toLowerCase();
            return name.indexOf(text.toLowerCase()) !== -1
        });
        console.log('filteredCountries ', filteredCountries);
        
        this.setState({filter: filteredCountries});
    }
    onSelectRegion = (option) => {
        let menu = option.label;
        console.log('inside filterCountris ', menu);
        let filteredCountries = this.state.countries.filter((country) => {
            let region = country.region.toLowerCase();
            return region==menu.toLowerCase()
        });
        console.log('filteredCountries ', filteredCountries);
        
        this.setState({filter: filteredCountries});
    }
    render() {
        console.log('render', this.state.countries.length);
        const {error, isLoaded, countries} = this.state;
        const options = [
            'Africa','Americas','Asia', 'Europe', 'Oceania'
        ];
        const defaultOption = options[0];
        if (error) {
            return <div>Error: {error.message}</div>
        } else if(!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
            <div className="container">
                <div className="filter_container">
                    <Search onChange={this.filterCountries}/>
                    <Dropdown className="regionmenu" controlClassName='myControlClassName' menuClassName="myMenuClassName" options={options} onChange={this.onSelectRegion} placeholder="Filter by Region" />
                </div>
                <Countries countries={this.state.countries} filter={this.state.filter}/>
            </div>
            );
        }
    }
}

export default HomeComponent;