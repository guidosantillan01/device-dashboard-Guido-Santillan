import React, { Component } from 'react';

import DeviceData from './DeviceData';

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    async componentDidMount() {
        try {
            const res = await fetch('http://localhost:8888/devices', {
                method: 'GET',
            });
            const response = await res.json();
            if (response) {
                console.log(response.data);
                this.setState({ data: response.data });
            }
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const { data } = this.state;
        return (
            <div>
                <h1>Relayr Device Dashboard</h1>
                <h3>by Guido Santillan.</h3>
                <DeviceData data={data} />
            </div>
        );
    }
}

export default App;
