import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class Reports extends Component {
    state = {}
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Link to="../HomePage.jsx"> <Button color="primary" className="reportingButton"> Reporting </Button> {' '} </Link>
                    <Route exact path="../HomePage.jsx" component={Reports} />
                </BrowserRouter>
            </div>

        );
    }
}

export default Reports