import React from 'react';
import { connect } from 'react-redux';

import { startChangeStatus } from '../actions';

import styles from '../styles.css';

const DeviceDataItem = ({ reading, dispatch }) => {
    const { active, name, timestamp, unit, value } = reading;

    return (
        <div className={styles.item}>
            <div className={styles.info}>
                <p className={styles.name}>{name}</p>
                <div className={styles.values}>
                    <p className={styles.value}>{value.toFixed(4)}</p>
                    <p className={styles.unit}>{unit}</p>
                </div>
                <p className={styles.timestamp}>{timestamp}</p>
            </div>

            {active ? (
                <p className={styles.statusActive}>Active</p>
            ) : (
                <p className={styles.statusInactive}>Inactive</p>
            )}

            <button
                onClick={() => {
                    dispatch(startChangeStatus(name, active));
                }}
            >
                Change status
            </button>
        </div>
    );
};

export default connect()(DeviceDataItem);
