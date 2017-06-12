import React from "react";
import Search from "./Search";
import Saved from "./Saved";

var API = require("../utils/API");

const Main = () => (
    <div className="container">
        <div className="jumbotron">
            <h1 className="text-center"><i className="fa fa-newspaper-o" aria-hidden="true"></i>  New York Times Artices</h1>
        </div>
        <div className="row">
            <div className="panel-group" id="accordion">
                {props.children}
            </div>
        </div>
    </div>
);

export default Main;