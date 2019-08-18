import React from 'react';

import DeviceDataItem from './DeviceDataItem';

const DeviceData = ({ data }) => {
    return (
        <div>
            {data.map(reading => {
                return <DeviceDataItem reading={reading} key={reading.name} />;
            })}
        </div>
    );
};

export default DeviceData;
