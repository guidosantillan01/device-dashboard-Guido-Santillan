import React, { Component } from 'react';
import { connect } from 'react-redux';

import DeviceData from './DeviceData';
import SearchForm from './SearchForm';
import StatusCounter from './StatusCounter';

import { startFetchData } from './actions';

import styles from './styles.css';

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(startFetchData());
    }

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.container}>
                    <h1>Relayr Device Dashboard</h1>
                    <h3>by Guido Santillan</h3>
                </div>
                <StatusCounter />
                <SearchForm />
                <DeviceData />
            </div>
        );
    }
}

export default connect()(App);
