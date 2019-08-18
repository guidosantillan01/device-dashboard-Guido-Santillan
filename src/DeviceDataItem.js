import React, { Component } from 'react';

class DeviceDataItem extends Component {
    async handleButtonClick(readingName, readingStatus) {
        try {
            const newStatus = !readingStatus;
            const res = await fetch(
                `http://127.0.0.1:8888/devices/${readingName}?active=${newStatus}`,
                { method: 'PATCH' },
            );
            const response = await res.json();
            console.log(response);
        } catch (error) {
            throw new Error(error);
        }
    }

    render() {
        const { active, name, timestamp, unit, value } = this.props.reading;

        return (
            <div className="device-data-item">
                <p>{active ? 'Active' : 'Inactive'}</p>
                <button onClick={() => this.handleButtonClick(name, active)}>
                    Change status
                </button>
                <p>Name: {name}</p>
                <p>Timestamp: {timestamp}</p>
                <p>Unit: {unit}</p>
                <p>Value: {value}</p>
            </div>
        );
    }
}

export default DeviceDataItem;
