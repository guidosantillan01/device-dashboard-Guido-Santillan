import React from 'react';
import { connect } from 'react-redux';

import { startChangeStatus } from './actions';

const DeviceDataItem = ({ reading, dispatch }) => {
    const { active, name, timestamp, unit, value } = reading;

    return (
        <div className="device-data-item">
            <p>{active ? 'Active' : 'Inactive'}</p>
            <button
                onClick={() => {
                    dispatch(startChangeStatus(name, active));
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
};

export default connect()(DeviceDataItem);
