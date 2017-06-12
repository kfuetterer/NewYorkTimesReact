import React, { Component } from "react";

var API = require("../../utils/API");

class Results extends Component {
	handleSubmit (event) {
		var index= event.target.getAttribute('data-index');
		var toSave = this.props.results.docs[index];
		API.saveArticle(toSave)
	}
    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h4 className="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">Results</a>
                    </h4>
                </div>
                <div id="collapse2" className="panel-collapse collapse">
                    <div className="panel-body">
                        <p>{this.props.results}</p><button onClick={this.handleSubmit} data-index={index} className="btn btn-primary">Save</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Results;