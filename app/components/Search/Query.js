import React, { Component } from "react";

var API = require("../../utils/API");

class Query extends Component {
    constructor() {
        super();
        this.state = {
            search: "",
            start: "",
            end: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange (event) {
    	var newState = {};
    	newState[event.target.id] = event.target.value;
    	this.setState(newState);
    }
	handleSubmit () {
		this.props.getArticles(this.state.search, this.state.start, this.state.end);
		return false;
	}
    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h4 className="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">Search</a>
                    </h4>
                </div>
                <div id="collapse1" className="panel-collapse collapse in">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <h4><strong>Topic</strong></h4>
                            <input value={this.state.value} id="search" onChange={this.handleChange} type="text" className="form-control" placeholder="Topic" />
                            <h4><strong>Start Year</strong></h4>
                            <input value={this.state.value} id="start" onChange={this.handleChange} type="text" className="form-control" placeholder="Start Year" />
                            <h4><strong>End Year</strong></h4>
                            <input value={this.state.value} id="end" onChange={this.handleChange} type="text" className="form-control" placeholder="End Year" />
                            <br />
                            <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Search</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
};

export default Query;