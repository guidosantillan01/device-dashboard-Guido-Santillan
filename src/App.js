import React, { Component } from 'react';

import DeviceData from './DeviceData';
import SearchForm from './SearchForm';
import getDevicesData from './api/getDevicesData';
import changeReadingStatus from './api/changeReadingStatus';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            nameFilter: '',
        };

        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.handleReadingStatusChange = this.handleReadingStatusChange.bind(
            this,
        );
    }

    async componentDidMount() {
        try {
            const response = await getDevicesData();
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

    async handleReadingStatusChange(readingName, readingStatus) {
        try {
            const newStatus = !readingStatus;
            const res = await changeReadingStatus(readingName, newStatus);
            if (res.ok) {
                this.setState(prevState => ({
                    data: prevState.data.map(reading => {
                        return reading.name === readingName
                            ? { ...reading, active: newStatus }
                            : reading;
                    }),
                }));
            }
        } catch (error) {
            throw new Error(error);
        }
    }

    render() {
        const { data, nameFilter } = this.state;
        return (
            <div>
                <h1>Relayr Device Dashboard</h1>
                <h3>by Guido Santillan.</h3>
                <SearchForm onFilterChange={this.handleFilterChange} />
                <DeviceData
                    data={data}
                    nameFilter={nameFilter}
                    handleReadingStatusChange={this.handleReadingStatusChange}
                />
            </div>
        );
    }
}

export default App;
