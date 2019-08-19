import React, { Component } from 'react';
import { connect } from 'react-redux';

import { filterText } from './actions';
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
            <div className={styles.container}>
                <p className={styles.label} style={{ textAlign: 'center' }}>
                    Search readings by name:{' '}
                </p>
                <div className={styles.flexContainer}>
                    <form onChange={this.handleFormChanges}>
                        <input type="text" data-testid="filter-by-name-input" />
                    </form>
                    <button className={styles.eraseButton}>x</button>
                </div>
            </div>
        );
    }
}

export default connect()(SearchForm);
