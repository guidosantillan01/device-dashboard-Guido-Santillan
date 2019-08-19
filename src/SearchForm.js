import React, { Component } from 'react';
import { connect } from 'react-redux';

import { filterText } from './actions';

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
            <div>
                <form onChange={this.handleFormChanges}>
                    <input type="text" data-testid="filter-by-name-input" />
                </form>
            </div>
        );
    }
}

export default connect()(SearchForm);
