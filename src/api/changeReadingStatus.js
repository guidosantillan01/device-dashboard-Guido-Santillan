const changeReadingStatus = async (readingName, newStatus) => {
    const res = await fetch(
        `http://127.0.0.1:8888/devices/${readingName}?active=${newStatus}`,
        {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
        },
    );
    return res;
};

export default changeReadingStatus;
