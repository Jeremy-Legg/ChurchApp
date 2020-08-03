import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Reports from './reports/Reports'


class HomePage extends Component {
    render() {
        return (
            <div>
                <main role="main">

                    <div class="jumbotron">
                        <div class="container">
                            <h1 class="display-3">App Name</h1>
                            <p>Here is some text about what the app is</p>
                            <p><a class="btn btn-primary btn-lg" onClick={this.handleNight} role="button">Create Night &raquo;</a></p>
                        </div>
                    </div>

                    <div class="container">

                        <div class="row">
                            <div class="col-md-4">
                                <h2>Reporting</h2>
                                <p>This is where you can view your reports. Reports are either based on a person, particular night, or selected period of nights </p>
                                <p><a class="btn btn-secondary" onClick={this.handleReporting} role="button">View details &raquo;</a></p>
                            </div>
                            <div class="col-md-4">
                                <h2>Setup</h2>
                                <p>This is where you handle the management of the app. You can add/remove people + whatever else i think of </p>
                                <p><a class="btn btn-secondary" onClick={this.handleSetup} role="button">View details &raquo;</a></p>
                            </div>
                            <div class="col-md-4">
                                <h2>Options</h2>
                                <p>Here are some options for how you would prefer the app to be. This is a future idea for things like dark mode + other stuff</p>
                                <p><a class="btn btn-secondary" onClick={this.handleOptions} role="button">View details &raquo;</a></p>
                            </div>
                        </div>

                        <hr></hr>
                    </div>
                </main>
            </div>
        );
    }

    handleNight = () => {
        
    };

    handleReporting = () => {

    };

    handleSetup = () => {

    };

    handleOptions = () => {

    };

}

export default HomePage;

/*

<div>
                    <BrowserRouter>
                        <Button color="primary" className="tonightButton" onClick={this.handleTonight}> Tonight </Button> {' '}
                        <Button color="primary" className="createNightButton" onClick={this.handleCreateNight}> Create Night </Button> {' '}
                        <Button color="primary" className="setUpButton" onClick={this.handleSetUp}> Set Up </Button> {' '}
                        <Link to="/reports/Reports.jsx"> <Button color="primary" className="reportingButton" onClick={this.handleReporting}> Reporting </Button> {' '} </Link>
                        <Route exact path="/reports/Reports.jsx" component={Reports} />
                    </BrowserRouter>
                </div>

*/
