import React from "react";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {searchText:null};
    }
    handleOnChange = (event) => {
        this.setState({searchText: event.target.value});
        this.props.onChange(event.target.value);
    }
    render() {
        return (
            <div className="search_container">
                <div className="search_border" >
                    <div className="search_icon">&#9906;</div>
                    <input type="text" placeholder="Search for a country..." onChange={this.handleOnChange}/>
                </div>
            </div>
        )
    }
}

export default Search;