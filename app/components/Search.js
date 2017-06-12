import React, { Component } from "react";

var API = require("../utils/API");

import Query from "./Search/Query";
import Results from "./Search/Results";

class Search extends Component {
    constructor() {
        super();
        this.state = {
            term: "",
            searchStartYear: "",
            searchEndYear: "",
            results: {}
        }
    }
	componentDidUpdate (prevProps, prevState) {
		API.runQuery(this.state.term, this.state.searchStartYear, this.state.searchEndYear, function(data){
			this.setState({
				results: data
			})
		}.bind(this));
    }
	setQuery (newQuery, newStart, newEnd) {
        this.setState({
            term: newQuery,
            searchStartYear: newStart,
            searchEndYear: newEnd
        });
	}
    render() {
        return (
			<div className="main-container">
				<Query updateSearch={this.setQuery} />
				{ }
				<Results results={this.state.results}/>
			</div>
        );
    }
};

export default Search;