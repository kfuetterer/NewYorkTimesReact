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
            searchEndYear: ""
        }
        this.getArticles = this.getArticles.bind(this);
    }
	getArticles (term, searchStartYear, searchEndYear) {
		API.runQuery(term, searchStartYear, searchEndYear, function(data){
			this.setState({
				term: term,
                searchStartYear: searchStartYear,
                searchEndYear: searchEndYear
			})
		}.bind(this));
    }
    render() {
        return (
			<div className="main-container">
				<Query getArticles={this.getArticles} />
				{ }
				<Results results={this.state.term}/>
			</div>
        );
    }
};

export default Search;