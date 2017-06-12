import React from "react";

const Main = () => (
    <div className="container">
        <div className="jumbotron">
            <h1 className="text-center"><i className="fa fa-newspaper-o" aria-hidden="true"></i>  New York Times Artices</h1>
        </div>
        <div className="row">
          { }
          {this.props.children}
          <div className="panel-group" id="accordion">
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h4 className="panel-title">
                        <Link to="/Search"><a data-toggle="collapse" data-parent="#accordion" href="#collapse1">Search</a></Link>
                    </h4>
                </div>
                <div id="collapse1" class="panel-collapse collapse in">
                    <div className="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.</div>
                </div>
            </div>
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h4 className="panel-title">
                        <Link to="/Results"><a data-toggle="collapse" data-parent="#accordion" href="#collapse2">Results</a></Link>
                    </h4>
                </div>
                <div id="collapse2" className="panel-collapse collapse">
                    <div className="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.</div>
                </div>
            </div>
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h4 className="panel-title">
                        <Link to="Saved"><a data-toggle="collapse" data-parent="#accordion" href="#collapse3">Saved Articles</a></Link>
                    </h4>
                </div>
                <div id="collapse3" className="panel-collapse collapse">
                    <div className="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.</div>
                </div>
            </div>
            </div>
        </div>
    </div>
);

export default Main;