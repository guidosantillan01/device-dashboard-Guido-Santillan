const getDevicesData = async () => {
    const res = await fetch('http://localhost:8888/devices', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const response = await res.json();
    return response;
};

export default getDevicesData;
