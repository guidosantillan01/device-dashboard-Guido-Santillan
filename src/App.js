import React, { Component } from 'react';
import { connect } from 'react-redux';

import DeviceData from './DeviceData';
import SearchForm from './SearchForm';

import { startFetchData } from './actions';

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(startFetchData());
    }

    render() {
        return (
            <div>
                <h1>Relayr Device Dashboard</h1>
                <h3>by Guido Santillan.</h3>
                <SearchForm />
                <DeviceData />
            </div>
        );
    }
}

export default connect()(App);
