import React, { Component } from 'react';

import DeviceData from './DeviceData';
import SearchForm from './SearchForm';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            nameFilter: '',
        };

        this.handleFilterChange = this.handleFilterChange.bind(this);
    }

    async componentDidMount() {
        try {
            const res = await fetch('http://localhost:8888/devices', {
                method: 'GET',
            });
            const response = await res.json();
            if (response) {
                this.setState({ data: response.data });
            }
        } catch (error) {
            throw new Error(error);
        }
    }

    handleFilterChange(filterText) {
        this.setState({ nameFilter: filterText });
    }

    render() {
        const { data, nameFilter } = this.state;
        return (
            <div>
                <h1>Relayr Device Dashboard</h1>
                <h3>by Guido Santillan.</h3>
                <SearchForm onFilterChange={this.handleFilterChange} />
                <DeviceData data={data} nameFilter={nameFilter} />
            </div>
        );
    }
}

export default App;
