import React, { Component } from 'react';

class DeviceDataItem extends Component {
    render() {
        const { active, name, timestamp, unit, value } = this.props.reading;

        return (
            <div className="device-data-item">
                <p>{active ? 'Active' : 'Inactive'}</p>
                <button
                    onClick={() => {
                        this.props.handleReadingStatusChange(name, active);
                    }}
                >
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
