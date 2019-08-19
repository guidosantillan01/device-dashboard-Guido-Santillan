import React from 'react';
import { connect } from 'react-redux';

import DeviceDataItem from './DeviceDataItem';
import filterByName from './selector/filterByName';

const DeviceData = ({ data, handleReadingStatusChange, filterText }) => {
    let activeCounter = 0;
    let inactiveCounter = 0;

    data.map(reading => {
        if (reading.active) {
            activeCounter++;
        } else {
            inactiveCounter++;
        }
    });

    const filteredData = filterByName(data, filterText);

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

            {filteredData.map(reading => {
                return (
                    <DeviceDataItem
                        reading={reading}
                        key={reading.name}
                        handleReadingStatusChange={handleReadingStatusChange}
                    />
                );
            })}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        filterText: state.filterText,
    };
};

export default connect(mapStateToProps)(DeviceData);
