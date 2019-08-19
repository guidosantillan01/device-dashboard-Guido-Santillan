import React from 'react';
import { connect } from 'react-redux';

import DeviceDataItem from './DeviceDataItem';

import removeErrorMessage from '../actions';
import filterByName from '../selector/filterByName';

import styles from '../styles.css';

const DeviceData = ({ data, filterText, errorMessage }) => {
    const filteredData = filterByName(data, filterText);

    return (
        <div>
            {errorMessage ? (
                <p className={styles.error}>
                    Could not change status for <strong>{errorMessage}</strong>.
                    Try again!
                </p>
            ) : (
                <p />
            )}
            <div className={styles.list}>
                {filteredData.map(reading => {
                    return (
                        <DeviceDataItem reading={reading} key={reading.name} />
                    );
                })}
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        filterText: state.filterText,
        data: state.data,
        errorMessage: state.errorMessage,
    };
};

export default connect(mapStateToProps)(DeviceData);
