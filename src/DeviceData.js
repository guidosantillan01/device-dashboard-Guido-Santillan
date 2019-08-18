import React from 'react';

import DeviceDataItem from './DeviceDataItem';

const DeviceData = ({ data }) => {
    let activeCounter = 0;
    let inactiveCounter = 0;

    data.map(reading => {
        if (reading.active) {
            activeCounter++;
        } else {
            inactiveCounter++;
        }
    });

    return (
        <div>
            {activeCounter + inactiveCounter === data.length ? (
                <div>
                    <p>Active readings: {activeCounter}</p>
                    <p>Inactive readings: {inactiveCounter}</p>
                </div>
            ) : (
                'Error counting readings'
            )}

            {data.map(reading => {
                return <DeviceDataItem reading={reading} key={reading.name} />;
            })}
        </div>
    );
};

export default DeviceData;
