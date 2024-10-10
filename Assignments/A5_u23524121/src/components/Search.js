//u23524121 Jamean Groenewald

import React from "react";

class Search extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {searchVal: ''};
    }

    handleInputChange = (event) =>
    {
        this.setState( {searchVal: event.target.value} );
    };

    handleSearch = () => 
    {
        const {searchVal} = this.state;

        if(searchVal.trim() !== '')
        {
            this.props.onSearch(searchVal); //pass to parent
        }
    };

    handlePrev = () =>
    {
        this.props.onPrevious(); //pass to parent
    };

    handleNext = () =>
    {
        this.props.onNext(); //pass to parent
    };

    render()
    {
        return (
            <div>
                <h2>Search</h2>

                <br/>

                <input type="text" value={this.state.searchVal} onChange={this.handleInputChange} className="search-input" />

                <br/>

                <button onClick={this.handleSearch} className="search-button" >Search</button>

                <br/>

                <button onClick={this.handlePrev} className="nav-button" disabled={this.props.currId<=0}>Previous</button>
                <button onClick={this.handleNext} className="nav-button" >Next</button>
            </div>
        );
    }
}

export default Search;