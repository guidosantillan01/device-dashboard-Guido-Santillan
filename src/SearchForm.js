import React, { Component } from 'react';

class SearchForm extends Component {
    constructor(props) {
        super(props);

        this.handleFormChanges = this.handleFormChanges.bind(this);
    }

    handleFormChanges(e) {
        e.preventDefault();
        this.props.onFilterChange(e.target.value);
    }

    render() {
        return (
            <div>
                <form onChange={this.handleFormChanges}>
                    <input type="text" />
                </form>
            </div>
        );
    }
}

export default SearchForm;
