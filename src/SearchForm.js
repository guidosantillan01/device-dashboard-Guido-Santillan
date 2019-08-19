import React, { Component } from 'react';
import { connect } from 'react-redux';

import { filterText, resetFilters } from './actions';
import styles from './styles.css';

class SearchForm extends Component {
    constructor(props) {
        super(props);

        this.handleFormChanges = this.handleFormChanges.bind(this);
    }

    handleFormChanges(e) {
        e.preventDefault();
        this.props.dispatch(filterText(e.target.value));
    }

    render() {
        return (
            <div className={styles.section}>
                <p className={styles.label} style={{ textAlign: 'center' }}>
                    Search readings by name:{' '}
                </p>
                <div className={styles.flexContainer}>
                    <input
                        onChange={this.handleFormChanges}
                        type="text"
                        data-testid="filter-by-name-input"
                        value={this.props.filterText}
                    />
                    <button
                        onClick={() => this.props.dispatch(resetFilters())}
                        className={styles.eraseButton}
                    >
                        x
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    filterText: state.filterText,
});

export default connect(mapStateToProps)(SearchForm);
