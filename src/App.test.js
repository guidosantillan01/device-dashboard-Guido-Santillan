import '@babel/polyfill';
import React from 'react';
import { render } from '@testing-library/react';

import App from './App';
import getDevicesData from './api/getDevicesData';

const testDevicesData = [
    {
        name: 'name1',
        unit: 'unit1',
        value: 1,
        timestamp: new Date().getTime() - Math.floor(Math.random() * 100000),
        active: true,
    },
    {
        name: 'name2',
        unit: 'unit2',
        value: 2,
        timestamp: new Date().getTime() - Math.floor(Math.random() * 100000),
        active: false,
    },
    {
        name: 'name3',
        unit: 'unit3',
        value: 3,
        timestamp: new Date().getTime() - Math.floor(Math.random() * 100000),
        active: true,
    },
];

function mockFetch(data) {
    return jest.fn().mockImplementation(() =>
        Promise.resolve({
            ok: true,
            json: () => data,
        }),
    );
}

describe('App Rendering Tests', () => {
    test('Should render Search bar', () => {
        const { getByTestId } = render(<App />);

        expect(getByTestId('filter-by-name-input')).toBeInTheDocument();
    });
});

describe('API requests Tests', () => {
    test('Should fetch data from devices', async () => {
        window.fetch = mockFetch(testDevicesData);

        const response = await getDevicesData();
        expect(response).toBeDefined();
        expect(response[0].name).toEqual('name1');
        expect(response.length).toBe(3);
        expect(Object.keys(response[0])).toEqual([
            'name',
            'unit',
            'value',
            'timestamp',
            'active',
        ]);
    });
});
