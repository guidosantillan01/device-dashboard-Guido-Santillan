import '@babel/polyfill';
import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

describe('App Tests', () => {
    test('Should render Search bar', () => {
        const { getByTestId } = render(<App />);

        expect(getByTestId('filter-by-name-input')).toBeInTheDocument();
    });
});
