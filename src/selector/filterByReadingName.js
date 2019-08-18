const filterByReadingName = (data, name) => {
    return data.filter(reading =>
        reading.name.toLowerCase().includes(name.toLowerCase()),
    );
};

export default filterByReadingName;
