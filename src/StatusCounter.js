import React from 'react';
import { connect } from 'react-redux';

import styles from './styles.css';

const StatusCounter = ({ data }) => {
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
        <div className={styles.section}>
            <div className={styles.flexContainer}>
                {activeCounter + inactiveCounter === data.length ? (
                    <div>
                        <p className={styles.counter}>
                            <span className={styles.data}>{activeCounter}</span>{' '}
                            <strong style={{ color: '#33cc66' }}>active</strong>{' '}
                            readings
                        </p>
                        <p className={styles.counter}>
                            <span className={styles.data}>
                                {inactiveCounter}
                            </span>{' '}
                            <strong style={{ color: '#ff2e63' }}>
                                inactive
                            </strong>{' '}
                            readings
                        </p>
                    </div>
                ) : (
                    'Error counting readings'
                )}
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        data: state.data,
    };
};

export default connect(mapStateToProps)(StatusCounter);
