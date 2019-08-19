import filterByName from './filterByName';

describe('Filter by Name Tests', () => {
    const data = [
        { name: 'acceleration_x' },
        { name: 'acceleration_y' },
        { name: 'latitude' },
        { name: 'orientation' },
    ];

    test('Should filter array by given input text', () => {
        let inputText = 'accel';
        expect(filterByName(data, inputText)).toEqual([
            { name: 'acceleration_x' },
            { name: 'acceleration_y' },
        ]);
        expect(filterByName(data, inputText)).not.toEqual([
            { name: 'latitude' },
            { name: 'orientation' },
        ]);

        inputText = 'latitude';
        expect(filterByName(data, inputText)).toEqual([
            {
                name: 'latitude',
            },
        ]);

        inputText = '';
        expect(filterByName(data, inputText)).toEqual(data);
        expect(filterByName(data, inputText)).not.toEqual([{}]);
    });

    test('Should return the same data when name is undefined', () => {
        expect(filterByName(data, undefined)).toEqual(data);
    });
});
