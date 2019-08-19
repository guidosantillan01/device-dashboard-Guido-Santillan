import React from 'react';
import { connect } from 'react-redux';

import DeviceDataItem from './DeviceDataItem';

import filterByName from './selector/filterByName';

import styles from './styles.css';

const DeviceData = ({ data, filterText }) => {
    const filteredData = filterByName(data, filterText);

    return (
        <div className={styles.list}>
            {filteredData.map(reading => {
                return <DeviceDataItem reading={reading} key={reading.name} />;
            })}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        filterText: state.filterText,
        data: state.data,
    };
};

export default connect(mapStateToProps)(DeviceData);
