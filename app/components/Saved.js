import React, { Component } from "react";

var API = require("../utils/API");

class Saved extends Component {
    constructor() {
        super();
        this.state = {
            articles: []
        };
        this.getArticles = this.getArticles.bind(this);
    }
    handleDelete (event) {
        var articleID = event.target.value;

        API.deleteArticle(articleID).then(function(response){
            console.log("Deleted article");
        }.bind(this));
    }
    getArticles() {
        API.getArticles().then((res) => {
            this.setState({ articles: res.data });
        });
    }
    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h4 className="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">Saved Articles</a>
                    </h4>
                </div>
                <div id="collapse3" className="panel-collapse collapse">
                    <div className="panel-body">
                        <ul class="list-group">
                            {this.props.saved.map(function(search, i) {
                                return (
                                        <li className="list-group-item" key={i}>{search.title} - {search.date}
                                        <button onClick={this.handleDelete} value={search._id} className="btn btn-primary">Remove</button>
                                        </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
};

export default Saved;