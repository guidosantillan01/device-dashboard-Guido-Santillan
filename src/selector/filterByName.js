const filterByName = (data, name) => {
    if (name === undefined) {
        return data;
    }
    return data.filter(reading =>
        reading.name.toLowerCase().includes(name.toLowerCase()),
    );
};

export default filterByName;
