import React from 'react';

const DeviceDataItem = ({ reading }) => {
    const { active, name, timestamp, unit, value } = reading;
    return (
        <div className="device-data-item">
            <p>{active ? 'Active' : 'Inactive'}</p>
            <p>Name: {name}</p>
            <p>Timestamp: {timestamp}</p>
            <p>Unit: {unit}</p>
            <p>Value: {value}</p>
        </div>
    );
};

export default DeviceDataItem;
