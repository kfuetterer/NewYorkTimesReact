import React, { Component } from "react";

var API = require("../utils/API");

import Query from "./Search/Query";
import Results from "./Search/Results";

class Search extends Component {
    constructor() {
        super();
        this.state = {
            results: {}
        }
        this.getArticles = this.getArticles.bind(this);
    }
	getArticles (term, searchStartYear, searchEndYear) {
		API.runQuery(term, searchStartYear, searchEndYear, function(data){
			this.setState({
                results: data
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